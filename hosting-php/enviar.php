<?php
/**
 * Rep el formulari de ressenyes i l'envia per correu.
 */
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;

function respond(bool $ok, string $error = '', int $code = 200): void
{
    global $wantsJson;
    if ($wantsJson) {
        http_response_code($code);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => $ok, 'error' => $error]);
    } else {
        // Sense JavaScript: tornem a la pàgina
        header('Location: index.html' . ($ok ? '?enviat=1' : '?error=1') . '#opinio', true, 303);
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(false, 'method', 405);
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) {
    error_log('[ressenyes] Falta config.php');
    respond(false, 'config', 500);
}
$config = require $configFile;

// --- Antispam -------------------------------------------------------------
// Camp parany: els humans no el veuen; si ve ple és un robot.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(true); // Fem veure que ha anat bé
}
// Massa ràpid (menys de 3 segons des que s'ha carregat la pàgina)
$ts = (int)($_POST['ts'] ?? 0);
if ($ts > 0 && time() - $ts < 3) {
    respond(true);
}

// --- Lectura i validació -------------------------------------------------
function field(string $key, int $max): string
{
    $v = (string)($_POST[$key] ?? '');
    $v = trim(preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '');
    return mb_substr($v, 0, $max);
}

$name    = field('name', 100);
$company = field('company', 100);
$email   = field('email', 150);
$comment = field('comment', 2000);
$rating  = (int)($_POST['rating'] ?? 0);
$publish = ($_POST['publish'] ?? '') === 'yes';
$privacy = !empty($_POST['privacy']);
$lang    = in_array($_POST['lang'] ?? '', ['ca', 'es', 'fr', 'en'], true) ? $_POST['lang'] : 'ca';

$recommendOptions = ['yes' => 'Sí', 'maybe' => 'Potser', 'no' => 'No'];
$recommend = $recommendOptions[$_POST['recommend'] ?? ''] ?? '—';

$errors = [];
if ($name === '') $errors[] = 'name';
if (mb_strlen($comment) < 10) $errors[] = 'comment';
if ($rating < 1 || $rating > 5) $errors[] = 'rating';
if (!$privacy) $errors[] = 'privacy';
if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($errors) {
    respond(false, 'invalid:' . implode(',', $errors), 422);
}

// --- Límit d'enviaments per IP -------------------------------------------
$dataDir = rtrim((string)($config['data_dir'] ?? __DIR__ . '/data'), '/');
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0750, true);
}
// Si la carpeta és dins del web, bloquegem l'accés públic (Apache)
if (is_dir($dataDir) && !is_file($dataDir . '/.htaccess')) {
    @file_put_contents($dataDir . '/.htaccess', "Require all denied\nDeny from all\n");
}

$ipHash = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|dpb');
$rateFile = $dataDir . '/rate.json';
$now = time();
$rate = is_file($rateFile) ? (json_decode((string)file_get_contents($rateFile), true) ?: []) : [];
foreach ($rate as $k => $list) {
    $rate[$k] = array_values(array_filter((array)$list, fn($t) => $now - (int)$t < 3600));
    if (!$rate[$k]) unset($rate[$k]);
}
if (count($rate[$ipHash] ?? []) >= (int)($config['max_per_hour'] ?? 5)) {
    respond(false, 'rate', 429);
}
$rate[$ipHash][] = $now;
@file_put_contents($rateFile, json_encode($rate), LOCK_EX);

// --- Còpia en CSV ---------------------------------------------------------
$date = date('Y-m-d H:i:s');
if (!empty($config['save_csv']) && is_dir($dataDir)) {
    $csv = $dataDir . '/ressenyes.csv';
    $isNew = !is_file($csv);
    if ($fh = @fopen($csv, 'a')) {
        flock($fh, LOCK_EX);
        if ($isNew) {
            fwrite($fh, "\xEF\xBB\xBF"); // BOM perquè Excel llegeixi bé els accents
            fputcsv($fh, ['Data', 'Idioma', 'Nom', 'Empresa', 'Correu', 'Satisfacció', 'Recomanaria', 'Publicable', 'Comentari'], ';');
        }
        // Evitem que Excel interpreti fórmules
        $safe = fn(string $s) => preg_match('/^[=+\-@]/', $s) ? "'" . $s : $s;
        fputcsv($fh, [$date, $lang, $safe($name), $safe($company), $safe($email), $rating, $recommend, $publish ? 'Sí' : 'No', $safe($comment)], ';');
        flock($fh, LOCK_UN);
        fclose($fh);
    }
}

// --- Correu ---------------------------------------------------------------
$stars = str_repeat('★', $rating) . str_repeat('☆', 5 - $rating);
$subject = "Nova opinió ($rating/5) · $name";

$lines = [
    "Nova opinió rebuda des del web",
    str_repeat('-', 40),
    "Data:        $date",
    "Idioma:      " . strtoupper($lang),
    "Nom:         $name",
    "Empresa:     " . ($company !== '' ? $company : '—'),
    "Correu:      " . ($email !== '' ? $email : '—'),
    "Satisfacció: $stars ($rating/5)",
    "Recomanaria: $recommend",
    "Publicació:  " . ($publish ? 'SÍ, autoritza publicar-la' : 'NO, només per a ús intern'),
    str_repeat('-', 40),
    "",
    $comment,
    "",
];
$body = implode("\n", $lines);

$to       = (string)$config['to_email'];
$from     = (string)$config['from_email'];
$fromName = (string)($config['from_name'] ?? 'Ressenyes');
$replyTo  = $email !== '' ? $email : '';

$sent = false;
$smtp = $config['smtp'] ?? [];

if (!empty($smtp['enabled'])) {
    $autoload = __DIR__ . '/vendor/autoload.php';
    if (is_file($autoload)) {
        require $autoload;
        try {
            $m = new PHPMailer\PHPMailer\PHPMailer(true);
            $m->isSMTP();
            $m->Host       = $smtp['host'];
            $m->Port       = (int)$smtp['port'];
            $m->SMTPAuth   = true;
            $m->Username   = $smtp['username'];
            $m->Password   = $smtp['password'];
            $m->SMTPSecure = $smtp['secure'] === 'ssl'
                ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
                : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $m->CharSet = 'UTF-8';
            $m->setFrom($from, $fromName);
            $m->addAddress($to);
            if ($replyTo !== '') $m->addReplyTo($replyTo, $name);
            $m->Subject = $subject;
            $m->Body    = $body;
            $sent = $m->send();
        } catch (Throwable $e) {
            error_log('[ressenyes] SMTP: ' . $e->getMessage());
        }
    } else {
        error_log('[ressenyes] SMTP activat però falta vendor/autoload.php (composer require phpmailer/phpmailer)');
    }
} else {
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'From: ' . mb_encode_mimeheader($fromName, 'UTF-8') . " <$from>",
    ];
    if ($replyTo !== '') {
        $headers[] = "Reply-To: $replyTo"; // ja validat amb FILTER_VALIDATE_EMAIL
    }
    $sent = mail($to, mb_encode_mimeheader($subject, 'UTF-8'), $body, implode("\r\n", $headers), '-f' . $from);
}

if (!$sent) {
    error_log('[ressenyes] No s\'ha pogut enviar el correu');
    // Si s'ha guardat al CSV la ressenya no es perd, però avisem igualment
    respond(false, 'mail', 500);
}

respond(true);
