(function () {
  'use strict';

  var T = {
    ca: {
      'hero.eyebrow': 'Publicitat i màrqueting digital',
      'hero.title': 'La vostra opinió és la nostra millor carta de presentació.',
      'hero.lead': 'Si heu treballat amb nosaltres, ens agradaria saber com ha anat. Només us prendrà un minut.',
      'hero.cta': 'Deixar una ressenya',
      'services.title': 'Què fem',
      'services.web': 'Pàgines web',
      'services.training': 'Formació',
      'services.ai': 'Intel·ligència artificial',
      'services.campaigns': 'Campanyes publicitàries',
      'services.design': 'Disseny gràfic i imprès',
      'form.title': 'Deixa la teva ressenya',
      'form.intro': 'Els vostres comentaris ens ajuden a millorar i donen confiança a qui encara no ens coneix.',
      'form.name': 'Nom i cognoms',
      'form.company': 'Empresa',
      'form.optional': '(opcional)',
      'form.email': 'Correu electrònic',
      'form.emailHelp': 'No es publicarà. Només per si us volem respondre.',
      'form.service': 'Servei contractat',
      'form.choose': 'Tria una opció',
      'form.other': 'Altres',
      'form.rating': 'Valoració',
      'form.comment': 'El teu comentari',
      'form.commentPh': "Explica'ns com ha estat la teva experiència…",
      'form.publish': 'Autoritzo que es publiqui la meva ressenya amb el meu nom i empresa.',
      'form.privacy': 'He llegit i accepto que les meves dades es facin servir només per gestionar aquesta ressenya.',
      'form.submit': 'Enviar ressenya',
      'form.sending': 'Enviant…',
      'form.invalid': 'Revisa els camps marcats en vermell.',
      'form.error': "No s'ha pogut enviar. Torna-ho a provar d'aquí a una estona.",
      'form.thanksTitle': 'Moltes gràcies!',
      'form.thanksText': 'Hem rebut la teva ressenya. La teva opinió ens ajuda a créixer.',
      'footer.tagline': 'Publicitat · Web · Formació · IA',
      'meta.title': 'Disseny Public Bucles · La vostra opinió'
    },
    es: {
      'hero.eyebrow': 'Publicidad y marketing digital',
      'hero.title': 'Vuestra opinión es nuestra mejor carta de presentación.',
      'hero.lead': 'Si habéis trabajado con nosotros, nos gustaría saber cómo ha ido. Solo os llevará un minuto.',
      'hero.cta': 'Dejar una reseña',
      'services.title': 'Qué hacemos',
      'services.web': 'Páginas web',
      'services.training': 'Formación',
      'services.ai': 'Inteligencia artificial',
      'services.campaigns': 'Campañas publicitarias',
      'services.design': 'Diseño gráfico e impreso',
      'form.title': 'Deja tu reseña',
      'form.intro': 'Vuestros comentarios nos ayudan a mejorar y dan confianza a quien todavía no nos conoce.',
      'form.name': 'Nombre y apellidos',
      'form.company': 'Empresa',
      'form.optional': '(opcional)',
      'form.email': 'Correo electrónico',
      'form.emailHelp': 'No se publicará. Solo por si queremos responderte.',
      'form.service': 'Servicio contratado',
      'form.choose': 'Elige una opción',
      'form.other': 'Otros',
      'form.rating': 'Valoración',
      'form.comment': 'Tu comentario',
      'form.commentPh': 'Cuéntanos cómo ha sido tu experiencia…',
      'form.publish': 'Autorizo que se publique mi reseña con mi nombre y empresa.',
      'form.privacy': 'He leído y acepto que mis datos se usen solo para gestionar esta reseña.',
      'form.submit': 'Enviar reseña',
      'form.sending': 'Enviando…',
      'form.invalid': 'Revisa los campos marcados en rojo.',
      'form.error': 'No se ha podido enviar. Vuelve a intentarlo dentro de un rato.',
      'form.thanksTitle': '¡Muchas gracias!',
      'form.thanksText': 'Hemos recibido tu reseña. Tu opinión nos ayuda a crecer.',
      'footer.tagline': 'Publicidad · Web · Formación · IA',
      'meta.title': 'Disseny Public Bucles · Vuestra opinión'
    },
    fr: {
      'hero.eyebrow': 'Publicité et marketing digital',
      'hero.title': 'Votre avis est notre meilleure carte de visite.',
      'hero.lead': 'Si vous avez travaillé avec nous, nous aimerions savoir comment cela s’est passé. Cela ne prend qu’une minute.',
      'hero.cta': 'Laisser un avis',
      'services.title': 'Ce que nous faisons',
      'services.web': 'Sites web',
      'services.training': 'Formation',
      'services.ai': 'Intelligence artificielle',
      'services.campaigns': 'Campagnes publicitaires',
      'services.design': 'Design graphique et imprimé',
      'form.title': 'Laissez votre avis',
      'form.intro': 'Vos commentaires nous aident à nous améliorer et donnent confiance à ceux qui ne nous connaissent pas encore.',
      'form.name': 'Nom et prénom',
      'form.company': 'Entreprise',
      'form.optional': '(facultatif)',
      'form.email': 'Adresse e-mail',
      'form.emailHelp': 'Elle ne sera pas publiée. Uniquement pour pouvoir vous répondre.',
      'form.service': 'Service utilisé',
      'form.choose': 'Choisissez une option',
      'form.other': 'Autre',
      'form.rating': 'Note',
      'form.comment': 'Votre commentaire',
      'form.commentPh': 'Racontez-nous votre expérience…',
      'form.publish': 'J’autorise la publication de mon avis avec mon nom et mon entreprise.',
      'form.privacy': 'J’ai lu et j’accepte que mes données soient utilisées uniquement pour gérer cet avis.',
      'form.submit': 'Envoyer mon avis',
      'form.sending': 'Envoi en cours…',
      'form.invalid': 'Vérifiez les champs marqués en rouge.',
      'form.error': 'L’envoi a échoué. Réessayez dans quelques instants.',
      'form.thanksTitle': 'Merci beaucoup !',
      'form.thanksText': 'Nous avons bien reçu votre avis. Votre opinion nous aide à grandir.',
      'footer.tagline': 'Publicité · Web · Formation · IA',
      'meta.title': 'Disseny Public Bucles · Votre avis'
    }
  };

  var LANGS = ['ca', 'es', 'fr'];
  var current = 'ca';

  function t(key) { return (T[current] && T[current][key]) || T.ca[key] || key; }

  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    try {
      var saved = localStorage.getItem('dpb-lang');
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* sense emmagatzematge */ }
    var nav = (navigator.languages || [navigator.language || 'ca']);
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

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('ts-field').value = Math.floor(Date.now() / 1000);
  applyLang(detectLang());

  // Formulari
  var form = document.getElementById('review-form');
  var status = document.getElementById('form-status');

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
      var el = document.getElementById(id);
      if (!el.checkValidity() || (el.required && !el.value.trim())) {
        el.classList.add('invalid');
        ok = false;
      }
    });
    if (!form.querySelector('input[name="rating"]:checked')) {
      form.querySelector('.rating').classList.add('invalid-group');
      ok = false;
    }
    var privacy = form.querySelector('input[name="privacy"]');
    if (!privacy.checked) {
      privacy.closest('.check').classList.add('invalid-group');
      ok = false;
    }
    return ok;
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!validate()) {
      setStatus(t('form.invalid'), 'err');
      var first = form.querySelector('.invalid, .invalid-group input');
      if (first) first.focus();
      return;
    }

    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = t('form.sending');
    setStatus('');

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (data) {
        if (data && data.ok) {
          form.classList.add('sent');
          form.innerHTML = '<h3></h3><p></p>';
          form.querySelector('h3').textContent = t('form.thanksTitle');
          form.querySelector('p').textContent = t('form.thanksText');
        } else {
          throw new Error('send failed');
        }
      })
      .catch(function () {
        setStatus(t('form.error'), 'err');
        btn.disabled = false;
        btn.textContent = t('form.submit');
      });
  });
})();
