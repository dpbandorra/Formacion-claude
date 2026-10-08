<?php
/**
 * Configuració del formulari de ressenyes.
 *
 * 1. Copia aquest fitxer amb el nom "config.php" (al mateix directori).
 * 2. Omple les dades. El fitxer config.php NO es puja a GitHub.
 */
return [
    // Adreça on arribaran les ressenyes
    'to_email' => 'el-teu-correu@exemple.com',

    // Remitent dels correus. Ha de ser una adreça del teu propi domini
    // (p. ex. ressenyes@elteudomini.cat) perquè no acabi a correu brossa.
    'from_email' => 'ressenyes@elteudomini.cat',
    'from_name'  => 'Disseny Public Bucles · Ressenyes',

    // Còpia de seguretat de cada ressenya en un CSV (true/false)
    'save_csv' => true,

    // Carpeta on es guarden el CSV i el control d'enviaments.
    // Millor fora de la carpeta pública del web si el hosting ho permet.
    'data_dir' => __DIR__ . '/data',

    // Màxim d'enviaments per IP i hora (protecció contra abusos)
    'max_per_hour' => 5,

    // SMTP opcional. Si 'enabled' és false s'utilitza la funció mail() de PHP.
    // Per fer servir SMTP cal instal·lar PHPMailer:  composer require phpmailer/phpmailer
    'smtp' => [
        'enabled'  => false,
        'host'     => 'smtp.elteudomini.cat',
        'port'     => 587,
        'secure'   => 'tls',   // 'tls' (port 587) o 'ssl' (port 465)
        'username' => 'ressenyes@elteudomini.cat',
        'password' => '',
    ],
];
