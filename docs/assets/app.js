(function () {
  'use strict';

  var CONFIG = window.DPB_CONFIG || {};

  var T = {
    ca: {
      'meta.title': 'DPB – Disseny Public Bucles · La vostra opinió',
      'test.banner': 'Entorn de proves · Utilitzeu només dades fictícies',
      'hero.eyebrow': 'Disseny, comunicació i tecnologia · Andorra',
      'hero.title': 'La vostra opinió és la nostra millor carta de presentació.',
      'hero.lead': 'Si heu treballat amb nosaltres, ens agradaria saber com ha anat. Només us prendrà un parell de minuts.',
      'hero.cta': 'Deixar la meva opinió',
      'services.title': 'Què fem',
      'services.philosophy': 'Solucions pràctiques i personalitzades, adaptades a cada client, amb un tracte proper i professional.',
      'services.langs': 'Treballem en català, castellà, francès i anglès.',
      'svc.web': 'Disseny i desenvolupament web',
      'svc.shop': 'Botigues en línia',
      'svc.seo': 'SEO i màrqueting digital',
      'svc.social': 'Xarxes socials i Google Business Profile',
      'svc.design': 'Disseny gràfic, publicitat i comunicació',
      'svc.hosting': 'Allotjament, dominis, correu i suport',
      'svc.automation': 'Automatització de processos',
      'svc.ai': 'Intel·ligència artificial i eines a mida',
      'svc.other': 'Altres',
      'form.title': 'Deixa la teva opinió',
      'form.intro': 'Els vostres comentaris ens ajuden a millorar i donen confiança a qui encara no ens coneix.',
      'form.step1': '1 · La teva valoració',
      'form.step1Help': 'Aquesta part és privada: només la llegeix el nostre equip.',
      'form.name': 'Nom i cognoms',
      'form.company': 'Empresa',
      'form.optional': '(opcional)',
      'form.email': 'Correu electrònic',
      'form.emailHelp': 'No es publicarà mai. Només per si us volem respondre.',
      'form.service': 'Servei rebut',
      'form.choose': 'Tria una opció',
      'form.rating': 'Satisfacció general',
      'form.ratingHelp': '(1 = gens satisfet · 5 = molt satisfet)',
      'form.recommend': 'Ens recomanaries?',
      'form.yes': 'Sí',
      'form.maybe': 'Potser',
      'form.no': 'No',
      'form.comment': 'El teu comentari',
      'form.commentPh': "Què t'ha agradat? Què podríem millorar?",
      'form.step2': '2 · Testimoni públic (opcional)',
      'form.step2Help': "Només publicarem la teva opinió si ho autoritzes expressament. Pots retirar l'autorització quan vulguis.",
      'form.publishNo': 'No, la meva opinió és només per a ús intern.',
      'form.publishYes': 'Sí, autoritzo publicar el meu comentari i la valoració com a testimoni.',
      'form.display': 'Com vols aparèixer al testimoni?',
      'form.displayFull': 'Nom i empresa',
      'form.displayName': 'Només el nom',
      'form.displayInitials': 'Només les inicials',
      'privacy.summary': 'Informació sobre protecció de dades',
      'privacy.text': "Responsable: DPB – Disseny Public Bucles (Andorra). Finalitat: gestionar la vostra opinió i, només si ho autoritzeu, publicar-la com a testimoni. El correu electrònic no es publica mai. Podeu exercir els drets d'accés, rectificació, supressió i oposició, i retirar l'autorització de publicació en qualsevol moment, contactant amb nosaltres. Normativa aplicable: Llei 29/2021 qualificada de protecció de dades personals d'Andorra.",
      'privacy.processor': "Durant aquesta fase, les dades s'envien per correu electrònic a través del servei FormSubmit.",
      'form.privacy': 'He llegit la informació sobre protecció de dades i accepto que es tractin les meves dades per gestionar aquesta opinió.',
      'form.submit': 'Enviar la meva opinió',
      'form.sending': 'Enviant…',
      'form.invalid': 'Revisa els camps marcats en vermell.',
      'form.error': "No s'ha pogut enviar. Torna-ho a provar d'aquí a una estona.",
      'form.activation': "El formulari encara no està activat. Cal confirmar el correu d'activació que ha enviat FormSubmit.",
      'form.thanksTitle': 'Moltes gràcies!',
      'form.thanksText': 'Hem rebut la teva opinió. Ens ajuda a millorar i a créixer.',
      'form.thanksDemo': "Mode demostració: el formulari ha funcionat correctament, però encara no s'ha enviat cap dada.",
      'footer.tagline': 'Andorra · Disseny · Comunicació · Tecnologia'
    },
    es: {
      'meta.title': 'DPB – Disseny Public Bucles · Vuestra opinión',
      'test.banner': 'Entorno de pruebas · Utilizad solo datos ficticios',
      'hero.eyebrow': 'Diseño, comunicación y tecnología · Andorra',
      'hero.title': 'Vuestra opinión es nuestra mejor carta de presentación.',
      'hero.lead': 'Si habéis trabajado con nosotros, nos gustaría saber cómo ha ido. Solo os llevará un par de minutos.',
      'hero.cta': 'Dejar mi opinión',
      'services.title': 'Qué hacemos',
      'services.philosophy': 'Soluciones prácticas y personalizadas, adaptadas a cada cliente, con un trato cercano y profesional.',
      'services.langs': 'Trabajamos en catalán, castellano, francés e inglés.',
      'svc.web': 'Diseño y desarrollo web',
      'svc.shop': 'Tiendas online',
      'svc.seo': 'SEO y marketing digital',
      'svc.social': 'Redes sociales y Google Business Profile',
      'svc.design': 'Diseño gráfico, publicidad y comunicación',
      'svc.hosting': 'Alojamiento, dominios, correo y soporte',
      'svc.automation': 'Automatización de procesos',
      'svc.ai': 'Inteligencia artificial y herramientas a medida',
      'svc.other': 'Otros',
      'form.title': 'Deja tu opinión',
      'form.intro': 'Vuestros comentarios nos ayudan a mejorar y dan confianza a quien todavía no nos conoce.',
      'form.step1': '1 · Tu valoración',
      'form.step1Help': 'Esta parte es privada: solo la lee nuestro equipo.',
      'form.name': 'Nombre y apellidos',
      'form.company': 'Empresa',
      'form.optional': '(opcional)',
      'form.email': 'Correo electrónico',
      'form.emailHelp': 'Nunca se publicará. Solo por si queremos responderte.',
      'form.service': 'Servicio recibido',
      'form.choose': 'Elige una opción',
      'form.rating': 'Satisfacción general',
      'form.ratingHelp': '(1 = nada satisfecho · 5 = muy satisfecho)',
      'form.recommend': '¿Nos recomendarías?',
      'form.yes': 'Sí',
      'form.maybe': 'Quizá',
      'form.no': 'No',
      'form.comment': 'Tu comentario',
      'form.commentPh': '¿Qué te ha gustado? ¿Qué podríamos mejorar?',
      'form.step2': '2 · Testimonio público (opcional)',
      'form.step2Help': 'Solo publicaremos tu opinión si lo autorizas expresamente. Puedes retirar la autorización cuando quieras.',
      'form.publishNo': 'No, mi opinión es solo para uso interno.',
      'form.publishYes': 'Sí, autorizo que se publiquen mi comentario y mi valoración como testimonio.',
      'form.display': '¿Cómo quieres aparecer en el testimonio?',
      'form.displayFull': 'Nombre y empresa',
      'form.displayName': 'Solo el nombre',
      'form.displayInitials': 'Solo las iniciales',
      'privacy.summary': 'Información sobre protección de datos',
      'privacy.text': 'Responsable: DPB – Disseny Public Bucles (Andorra). Finalidad: gestionar vuestra opinión y, solo si lo autorizáis, publicarla como testimonio. El correo electrónico nunca se publica. Podéis ejercer los derechos de acceso, rectificación, supresión y oposición, y retirar la autorización de publicación en cualquier momento, contactando con nosotros. Normativa aplicable: Ley 29/2021 cualificada de protección de datos personales de Andorra.',
      'privacy.processor': 'Durante esta fase, los datos se envían por correo electrónico a través del servicio FormSubmit.',
      'form.privacy': 'He leído la información sobre protección de datos y acepto que se traten mis datos para gestionar esta opinión.',
      'form.submit': 'Enviar mi opinión',
      'form.sending': 'Enviando…',
      'form.invalid': 'Revisa los campos marcados en rojo.',
      'form.error': 'No se ha podido enviar. Vuelve a intentarlo dentro de un rato.',
      'form.activation': 'El formulario todavía no está activado. Hay que confirmar el correo de activación que ha enviado FormSubmit.',
      'form.thanksTitle': '¡Muchas gracias!',
      'form.thanksText': 'Hemos recibido tu opinión. Nos ayuda a mejorar y a crecer.',
      'form.thanksDemo': 'Modo demostración: el formulario ha funcionado correctamente, pero todavía no se ha enviado ningún dato.',
      'footer.tagline': 'Andorra · Diseño · Comunicación · Tecnología'
    },
    fr: {
      'meta.title': 'DPB – Disseny Public Bucles · Votre avis',
      'test.banner': 'Environnement de test · Utilisez uniquement des données fictives',
      'hero.eyebrow': 'Design, communication et technologie · Andorre',
      'hero.title': 'Votre avis est notre meilleure carte de visite.',
      'hero.lead': 'Si vous avez travaillé avec nous, nous aimerions savoir comment cela s’est passé. Cela ne prend que quelques minutes.',
      'hero.cta': 'Donner mon avis',
      'services.title': 'Ce que nous faisons',
      'services.philosophy': 'Des solutions pratiques et personnalisées, adaptées à chaque client, avec un accompagnement proche et professionnel.',
      'services.langs': 'Nous travaillons en catalan, espagnol, français et anglais.',
      'svc.web': 'Conception et développement web',
      'svc.shop': 'Boutiques en ligne',
      'svc.seo': 'SEO et marketing digital',
      'svc.social': 'Réseaux sociaux et Google Business Profile',
      'svc.design': 'Design graphique, publicité et communication',
      'svc.hosting': 'Hébergement, domaines, e-mail et support',
      'svc.automation': 'Automatisation des processus',
      'svc.ai': 'Intelligence artificielle et outils sur mesure',
      'svc.other': 'Autre',
      'form.title': 'Donnez votre avis',
      'form.intro': 'Vos commentaires nous aident à nous améliorer et donnent confiance à ceux qui ne nous connaissent pas encore.',
      'form.step1': '1 · Votre évaluation',
      'form.step1Help': 'Cette partie est privée : seule notre équipe la lit.',
      'form.name': 'Nom et prénom',
      'form.company': 'Entreprise',
      'form.optional': '(facultatif)',
      'form.email': 'Adresse e-mail',
      'form.emailHelp': 'Elle ne sera jamais publiée. Uniquement pour pouvoir vous répondre.',
      'form.service': 'Service reçu',
      'form.choose': 'Choisissez une option',
      'form.rating': 'Satisfaction générale',
      'form.ratingHelp': '(1 = pas du tout satisfait · 5 = très satisfait)',
      'form.recommend': 'Nous recommanderiez-vous ?',
      'form.yes': 'Oui',
      'form.maybe': 'Peut-être',
      'form.no': 'Non',
      'form.comment': 'Votre commentaire',
      'form.commentPh': 'Qu’avez-vous apprécié ? Que pourrions-nous améliorer ?',
      'form.step2': '2 · Témoignage public (facultatif)',
      'form.step2Help': 'Nous ne publierons votre avis que si vous l’autorisez expressément. Vous pouvez retirer votre autorisation à tout moment.',
      'form.publishNo': 'Non, mon avis est uniquement à usage interne.',
      'form.publishYes': 'Oui, j’autorise la publication de mon commentaire et de ma note comme témoignage.',
      'form.display': 'Comment souhaitez-vous apparaître ?',
      'form.displayFull': 'Nom et entreprise',
      'form.displayName': 'Nom uniquement',
      'form.displayInitials': 'Initiales uniquement',
      'privacy.summary': 'Informations sur la protection des données',
      'privacy.text': 'Responsable : DPB – Disseny Public Bucles (Andorre). Finalité : gérer votre avis et, uniquement si vous l’autorisez, le publier comme témoignage. L’adresse e-mail n’est jamais publiée. Vous pouvez exercer vos droits d’accès, de rectification, de suppression et d’opposition, et retirer l’autorisation de publication à tout moment en nous contactant. Réglementation applicable : Loi 29/2021 qualifiée de protection des données personnelles d’Andorre.',
      'privacy.processor': 'Pendant cette phase, les données sont envoyées par e-mail via le service FormSubmit.',
      'form.privacy': 'J’ai lu les informations sur la protection des données et j’accepte que mes données soient traitées pour gérer cet avis.',
      'form.submit': 'Envoyer mon avis',
      'form.sending': 'Envoi en cours…',
      'form.invalid': 'Vérifiez les champs marqués en rouge.',
      'form.error': 'L’envoi a échoué. Réessayez dans quelques instants.',
      'form.activation': 'Le formulaire n’est pas encore activé. Il faut confirmer l’e-mail d’activation envoyé par FormSubmit.',
      'form.thanksTitle': 'Merci beaucoup !',
      'form.thanksText': 'Nous avons bien reçu votre avis. Il nous aide à progresser.',
      'form.thanksDemo': 'Mode démonstration : le formulaire a fonctionné correctement, mais aucune donnée n’a encore été envoyée.',
      'footer.tagline': 'Andorre · Design · Communication · Technologie'
    },
    en: {
      'meta.title': 'DPB – Disseny Public Bucles · Your feedback',
      'test.banner': 'Test environment · Please use fictitious data only',
      'hero.eyebrow': 'Design, communication & technology · Andorra',
      'hero.title': 'Your feedback is our best calling card.',
      'hero.lead': 'If you have worked with us, we would love to hear how it went. It only takes a couple of minutes.',
      'hero.cta': 'Leave my feedback',
      'services.title': 'What we do',
      'services.philosophy': 'Practical, tailor-made solutions adapted to each client, with a close and professional approach.',
      'services.langs': 'We work in Catalan, Spanish, French and English.',
      'svc.web': 'Web design & development',
      'svc.shop': 'Online stores & e-commerce',
      'svc.seo': 'SEO & digital marketing',
      'svc.social': 'Social media & Google Business Profile',
      'svc.design': 'Graphic design, advertising & communication',
      'svc.hosting': 'Hosting, domains, email & support',
      'svc.automation': 'Business process automation',
      'svc.ai': 'Artificial intelligence & custom digital tools',
      'svc.other': 'Other',
      'form.title': 'Leave your feedback',
      'form.intro': 'Your comments help us improve and give confidence to those who do not know us yet.',
      'form.step1': '1 · Your rating',
      'form.step1Help': 'This part is private: only our team reads it.',
      'form.name': 'Full name',
      'form.company': 'Company',
      'form.optional': '(optional)',
      'form.email': 'Email',
      'form.emailHelp': 'It will never be published. Only so we can reply to you.',
      'form.service': 'Service received',
      'form.choose': 'Choose an option',
      'form.rating': 'Overall satisfaction',
      'form.ratingHelp': '(1 = not satisfied · 5 = very satisfied)',
      'form.recommend': 'Would you recommend us?',
      'form.yes': 'Yes',
      'form.maybe': 'Maybe',
      'form.no': 'No',
      'form.comment': 'Your comment',
      'form.commentPh': 'What did you like? What could we improve?',
      'form.step2': '2 · Public testimonial (optional)',
      'form.step2Help': 'We will only publish your feedback if you expressly authorise it. You can withdraw your authorisation at any time.',
      'form.publishNo': 'No, my feedback is for internal use only.',
      'form.publishYes': 'Yes, I authorise publishing my comment and rating as a testimonial.',
      'form.display': 'How would you like to appear?',
      'form.displayFull': 'Name and company',
      'form.displayName': 'Name only',
      'form.displayInitials': 'Initials only',
      'privacy.summary': 'Data protection information',
      'privacy.text': 'Controller: DPB – Disseny Public Bucles (Andorra). Purpose: to manage your feedback and, only if you authorise it, publish it as a testimonial. Your email address is never published. You may exercise your rights of access, rectification, erasure and objection, and withdraw your publication consent at any time, by contacting us. Applicable law: Andorran Qualified Law 29/2021 on the protection of personal data.',
      'privacy.processor': 'During this phase, data is sent by email through the FormSubmit service.',
      'form.privacy': 'I have read the data protection information and agree to my data being processed to manage this feedback.',
      'form.submit': 'Send my feedback',
      'form.sending': 'Sending…',
      'form.invalid': 'Please check the fields marked in red.',
      'form.error': 'It could not be sent. Please try again in a moment.',
      'form.activation': 'The form is not activated yet. The activation email sent by FormSubmit must be confirmed.',
      'form.thanksTitle': 'Thank you very much!',
      'form.thanksText': 'We have received your feedback. It helps us improve and grow.',
      'form.thanksDemo': 'Demo mode: the form worked correctly, but no data has been sent yet.',
      'footer.tagline': 'Andorra · Design · Communication · Technology'
    }
  };

  var LANGS = ['ca', 'es', 'fr', 'en'];
  var current = 'ca';

  // Etiquetes dels correus que rep l'empresa (sempre en català)
  var LABELS = T.ca;

  function t(key) { return (T[current] && T[current][key]) || T.ca[key] || key; }

  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    try {
      var saved = localStorage.getItem('dpb-lang');
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* sense emmagatzematge */ }
    var nav = navigator.languages || [navigator.language || 'ca'];
    for (var i = 0; i < nav.length; i++) {
      var code = String(nav[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) !== -1) return code;
    }
    return 'ca';
  }

  function applyLang(lang) {
    current = lang;
    document.documentElement.lang = lang;
    document.title = t('meta.title');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    var langField = document.getElementById('lang-field');
    if (langField) langField.value = lang;
    try { localStorage.setItem('dpb-lang', lang); } catch (e) { /* res */ }
  }

  // Mode d'enviament
  var mode = CONFIG.phpEndpoint ? 'php' : (CONFIG.formsubmit ? 'formsubmit' : 'demo');

  document.getElementById('testbar').hidden = !CONFIG.testMode;
  document.getElementById('privacy-processor').hidden = mode !== 'formsubmit';
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('ts-field').value = Math.floor(Date.now() / 1000);

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });
  applyLang(detectLang());

  // Formulari
  var form = document.getElementById('review-form');
  var status = document.getElementById('form-status');
  var f = form.elements;

  // Mostrar "com vols aparèixer" només si autoritza publicar
  var displayField = document.getElementById('display-field');
  form.querySelectorAll('input[name="publish"]').forEach(function (r) {
    r.addEventListener('change', function () {
      displayField.hidden = f.publish.value !== 'yes';
    });
  });

  function setStatus(msg, kind) {
    status.textContent = msg;
    status.className = 'status' + (kind ? ' ' + kind : '');
  }

  function validate() {
    var ok = true;
    form.querySelectorAll('.invalid, .invalid-group').forEach(function (el) {
      el.classList.remove('invalid', 'invalid-group');
    });
    ['name', 'service', 'comment', 'email'].forEach(function (id) {
      var el = f[id];
      if (!el.checkValidity() || (el.required && !el.value.trim())) {
        el.classList.add('invalid');
        ok = false;
      }
    });
    if (!f.rating.value) {
      form.querySelector('.rating').classList.add('invalid-group');
      ok = false;
    }
    if (!f.privacy.checked) {
      f.privacy.closest('.check').classList.add('invalid-group');
      ok = false;
    }
    return ok;
  }

  function optionText(select, value) {
    var o = select.querySelector('option[value="' + value + '"]');
    return o ? LABELS[o.getAttribute('data-i18n')] : value;
  }

  // Dades llegibles per al correu que rep l'empresa
  function summary() {
    var rating = Number(f.rating.value);
    var publish = f.publish.value === 'yes';
    var rec = f.recommend.value;
    return {
      rating: rating,
      rows: [
        ['Nom', f.name.value.trim()],
        ['Empresa', f.company.value.trim() || '—'],
        ['Correu', f.email.value.trim() || '—'],
        ['Servei', optionText(f.service, f.service.value)],
        ['Satisfacció', '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating) + ' (' + rating + '/5)'],
        ['Recomanaria', rec ? LABELS['form.' + rec] : '—'],
        ['Comentari', f.comment.value.trim()],
        ['Publicació', publish ? 'SÍ, autoritza publicar-la' : 'NO, només ús intern'],
        ['Mostrar com', publish ? optionText(f.display, f.display.value) : '—'],
        ['Idioma', current.toUpperCase()]
      ]
    };
  }

  function showThanks(demo) {
    form.classList.add('sent');
    form.textContent = '';
    var h = document.createElement('h3');
    h.textContent = t('form.thanksTitle');
    var p = document.createElement('p');
    p.textContent = demo ? t('form.thanksDemo') : t('form.thanksText');
    form.appendChild(h);
    form.appendChild(p);
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!validate()) {
      setStatus(t('form.invalid'), 'err');
      var first = form.querySelector('.invalid, .invalid-group input');
      if (first) first.focus();
      return;
    }
    if (f.website.value) { showThanks(false); return; } // camp parany: robot

    if (mode === 'demo') {
      if (window.console) console.info('[DPB] Mode demostració. Dades:', summary());
      showThanks(true);
      return;
    }

    var url, body;
    if (mode === 'php') {
      url = CONFIG.phpEndpoint;
      body = new FormData(form);
    } else {
      var s = summary();
      url = 'https://formsubmit.co/ajax/' + encodeURIComponent(CONFIG.formsubmit);
      body = new FormData();
      body.append('_subject', (CONFIG.testMode ? '[PROVA] ' : '') + 'Nova opinió (' + s.rating + '/5) · ' + f.name.value.trim());
      body.append('_template', 'table');
      body.append('_captcha', 'false');
      if (f.email.value.trim()) body.append('_replyto', f.email.value.trim());
      s.rows.forEach(function (r) { body.append(r[0], r[1]); });
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = t('form.sending');
    setStatus('');

    fetch(url, { method: 'POST', body: body, headers: { 'Accept': 'application/json' } })
      .then(function (r) { return r.json().catch(function () { return {}; }); })
      .then(function (data) {
        if (data.ok === true || data.success === true || data.success === 'true') {
          showThanks(false);
          return;
        }
        var activation = /activat/i.test(String(data.message || ''));
        throw new Error(activation ? 'activation' : 'send');
      })
      .catch(function (err) {
        setStatus(t(err && err.message === 'activation' ? 'form.activation' : 'form.error'), 'err');
        btn.disabled = false;
        btn.textContent = t('form.submit');
      });
  });
})();
