(function () {
  'use strict';

  var CONFIG = window.DPB_CONFIG || {};

  var T = {
    es: {
      'meta.title': 'DPB · Ideas Visuales · Tu opinión',
      'test.banner': 'Entorno de pruebas · Utiliza solo datos ficticios',
      'nav.about': 'Quiénes somos',
      'nav.reviews': 'Opiniones',
      'nav.contact': 'Contacto',
      'hero.eyebrow': 'Diseño, comunicación y tecnología · Andorra',
      'hero.title': 'Tu opinión es una de las mejores formas de ayudarnos a crecer.',
      'hero.lead': 'Si has trabajado con nosotros, nos encantará saber cómo ha sido tu experiencia. Tu opinión nos ayuda a mejorar y también orienta a futuros clientes.',
      'hero.cta': 'Dejar mi opinión',
      'hero.cta2': 'Conocer DPB',
      'hero.kicker': 'Estudio en Andorra',
      'hero.v1': 'Cercanía',
      'hero.v1d': 'Trato directo y personal en cada proyecto.',
      'hero.v2': 'Soluciones a medida',
      'hero.v2d': 'Adaptamos cada propuesta a lo que necesitas.',
      'hero.v3': 'Diseño y tecnología',
      'hero.v3d': 'Creatividad y criterio técnico, juntos.',
      'hero.chipLangs': 'Trabajamos en 4 idiomas',
      'hero.chipTime': 'para dejar tu opinión',
      'form.title': 'Déjanos tu opinión',
      'form.intro': 'Tu comentario nos ayuda a mejorar y, si tú quieres, también puede convertirse en un testimonio útil para otras personas.',
      'steps.1': 'Tus datos',
      'steps.2': 'Tu comentario',
      'steps.3': 'Tu valoración',
      'steps.4': 'Publicación (opcional)',
      'steps.note': 'Lo que escribas es privado, salvo que nos autorices a publicarlo.',
      'form.secA': 'Tus datos',
      'form.name': 'Nombre y apellidos',
      'form.company': 'Empresa',
      'form.optional': '(opcional)',
      'form.email': 'Correo electrónico',
      'form.emailHelp': 'Nunca se publicará. Solo lo utilizaremos si necesitamos responderte.',
      'form.secB': 'Tu comentario',
      'form.comment': 'Tu comentario',
      'form.commentPh': 'Cuéntanos qué te ha gustado, cómo ha sido tu experiencia o qué podríamos mejorar.',
      'form.secC': 'Tu valoración',
      'form.rating': 'Satisfacción general',
      'form.ratingHelp': '1 = nada satisfecho · 5 = muy satisfecho',
      'form.recommend': '¿Nos recomendarías?',
      'form.yes': 'Sí',
      'form.maybe': 'Quizá',
      'form.no': 'No',
      'pub.title': '¿Quieres que podamos publicar tu opinión?',
      'pub.text': 'Solo publicaremos tu comentario si nos das permiso expresamente. Si no, quedará únicamente para uso interno.',
      'pub.no': 'No, mi opinión es solo para uso interno.',
      'pub.yes': 'Sí, autorizo que se publique mi comentario y mi valoración como testimonio.',
      'privacy.title': 'Información sobre protección de datos',
      'privacy.short': 'Tus datos se utilizarán únicamente para gestionar esta opinión. Si autorizas la publicación, solo mostraremos la información necesaria como testimonio.',
      'privacy.more': 'Más información',
      'privacy.text': 'Responsable: DPB – Disseny Public Bucles (Andorra). Finalidad: gestionar tu opinión y, solo si lo autorizas, publicarla como testimonio. El correo electrónico nunca se publica. Puedes ejercer los derechos de acceso, rectificación, supresión y oposición, y retirar la autorización de publicación en cualquier momento, contactando con nosotros. Normativa aplicable: Ley 29/2021 cualificada de protección de datos personales de Andorra.',
      'privacy.processor': 'Durante esta fase de pruebas, los datos se envían por correo electrónico a través del servicio FormSubmit.',
      'form.privacy': 'He leído la información sobre protección de datos y acepto el tratamiento de mis datos para gestionar esta opinión.',
      'form.submit': 'Enviar mi opinión',
      'form.sending': 'Enviando…',
      'form.invalid': 'Revisa los campos marcados en rojo.',
      'form.error': 'No se ha podido enviar. Vuelve a intentarlo dentro de un rato.',
      'form.activation': 'El formulario todavía no está activado. Hay que confirmar el correo de activación que ha enviado FormSubmit.',
      'form.thanksTitle': '¡Muchas gracias!',
      'form.thanksText': 'Hemos recibido tu opinión y la leeremos con atención.',
      'form.thanksDemo': 'Modo demostración: el formulario ha funcionado correctamente, pero todavía no se ha enviado ningún dato.',
      'about.title': 'Quiénes somos',
      'about.text': 'En DPB ayudamos a negocios y proyectos a comunicar mejor, vender mejor y trabajar de forma más práctica, combinando creatividad, estrategia y tecnología.',
      'about.langs': 'Trabajamos en catalán, castellano, francés e inglés.',
      'svc.web': 'Diseño y desarrollo web',
      'svc.webD': 'Creamos y mejoramos páginas web pensadas para comunicar bien, transmitir confianza y adaptarse a cada proyecto.',
      'svc.shop': 'Tiendas online',
      'svc.shopD': 'Desarrollamos ecommerce claros y funcionales, orientados a facilitar la gestión y mejorar la experiencia de compra.',
      'svc.seo': 'SEO y marketing digital',
      'svc.seoD': 'Trabajamos el posicionamiento, la visibilidad y la captación para ayudar a que cada negocio llegue a más personas.',
      'svc.social': 'Redes sociales y Google Business Profile',
      'svc.socialD': 'Ayudamos a cuidar la presencia digital del negocio, mejorar su imagen y reforzar su visibilidad local.',
      'svc.design': 'Diseño gráfico, publicidad y comunicación',
      'svc.designD': 'Diseñamos piezas visuales y mensajes que refuerzan la identidad de marca y hacen más clara la comunicación.',
      'svc.hosting': 'Alojamiento, dominios, correo y soporte',
      'svc.hostingD': 'Ofrecemos acompañamiento técnico en aspectos clave para que todo funcione con estabilidad y tranquilidad.',
      'svc.automation': 'Automatización de procesos',
      'svc.automationD': 'Buscamos formas de ahorrar tiempo y simplificar tareas mediante automatizaciones útiles y bien pensadas.',
      'svc.ai': 'Inteligencia artificial y herramientas a medida',
      'svc.aiD': 'Exploramos soluciones prácticas con IA y desarrollamos herramientas personalizadas cuando el proyecto lo necesita.',
      'testi.eyebrow': 'Testimonios',
      'testi.title': 'Lo que más se valora de trabajar con nosotros',
      'testi.note': 'Textos de ejemplo. Aquí mostraremos testimonios reales seleccionados a mano, siempre con la autorización expresa de sus autores.',
      'testi.tag': 'Ejemplo',
      'testi.q1': '“Trato cercano, soluciones claras y una forma de trabajar muy práctica.”',
      'testi.q2': '“Nos sentimos acompañados durante todo el proceso.”',
      'testi.q3': '“Se nota la combinación de diseño, criterio y soporte técnico.”',
      'footer.place': 'Andorra',
      'footer.tagline': 'Diseño · Comunicación · Tecnología',
      'footer.contact': '¿Quieres comentarnos algo? Déjanos tu mensaje a través del formulario.',
      'footer.contactLink': 'Ir al formulario →'
    },
    ca: {
      'meta.title': 'DPB · Ideas Visuales · La teva opinió',
      'test.banner': 'Entorn de proves · Utilitza només dades fictícies',
      'nav.about': 'Qui som',
      'nav.reviews': 'Opinions',
      'nav.contact': 'Contacte',
      'hero.eyebrow': 'Disseny, comunicació i tecnologia · Andorra',
      'hero.title': "La teva opinió és una de les millors maneres d'ajudar-nos a créixer.",
      'hero.lead': 'Si has treballat amb nosaltres, ens encantarà saber com ha anat la teva experiència. La teva opinió ens ajuda a millorar i també orienta futurs clients.',
      'hero.cta': 'Deixar la meva opinió',
      'hero.cta2': 'Conèixer DPB',
      'hero.kicker': 'Estudi a Andorra',
      'hero.v1': 'Proximitat',
      'hero.v1d': 'Tracte directe i personal en cada projecte.',
      'hero.v2': 'Solucions a mida',
      'hero.v2d': 'Adaptem cada proposta al que necessites.',
      'hero.v3': 'Disseny i tecnologia',
      'hero.v3d': 'Creativitat i criteri tècnic, junts.',
      'hero.chipLangs': 'Treballem en 4 idiomes',
      'hero.chipTime': 'per deixar la teva opinió',
      'form.title': "Deixa'ns la teva opinió",
      'form.intro': 'El teu comentari ens ajuda a millorar i, si tu vols, també pot convertir-se en un testimoni útil per a altres persones.',
      'steps.1': 'Les teves dades',
      'steps.2': 'El teu comentari',
      'steps.3': 'La teva valoració',
      'steps.4': 'Publicació (opcional)',
      'steps.note': "El que escriguis és privat, tret que ens autoritzis a publicar-ho.",
      'form.secA': 'Les teves dades',
      'form.name': 'Nom i cognoms',
      'form.company': 'Empresa',
      'form.optional': '(opcional)',
      'form.email': 'Correu electrònic',
      'form.emailHelp': "No es publicarà mai. Només el farem servir si necessitem respondre't.",
      'form.secB': 'El teu comentari',
      'form.comment': 'El teu comentari',
      'form.commentPh': "Explica'ns què t'ha agradat, com ha estat la teva experiència o què podríem millorar.",
      'form.secC': 'La teva valoració',
      'form.rating': 'Satisfacció general',
      'form.ratingHelp': '1 = gens satisfet · 5 = molt satisfet',
      'form.recommend': 'Ens recomanaries?',
      'form.yes': 'Sí',
      'form.maybe': 'Potser',
      'form.no': 'No',
      'pub.title': 'Vols que puguem publicar la teva opinió?',
      'pub.text': "Només publicarem el teu comentari si ens en dones permís expressament. Si no, quedarà únicament per a ús intern.",
      'pub.no': 'No, la meva opinió és només per a ús intern.',
      'pub.yes': 'Sí, autoritzo que es publiquin el meu comentari i la meva valoració com a testimoni.',
      'privacy.title': 'Informació sobre protecció de dades',
      'privacy.short': "Les teves dades s'utilitzaran únicament per gestionar aquesta opinió. Si n'autoritzes la publicació, només mostrarem la informació necessària com a testimoni.",
      'privacy.more': 'Més informació',
      'privacy.text': "Responsable: DPB – Disseny Public Bucles (Andorra). Finalitat: gestionar la teva opinió i, només si ho autoritzes, publicar-la com a testimoni. El correu electrònic no es publica mai. Pots exercir els drets d'accés, rectificació, supressió i oposició, i retirar l'autorització de publicació en qualsevol moment, contactant amb nosaltres. Normativa aplicable: Llei 29/2021 qualificada de protecció de dades personals d'Andorra.",
      'privacy.processor': "Durant aquesta fase de proves, les dades s'envien per correu electrònic a través del servei FormSubmit.",
      'form.privacy': 'He llegit la informació sobre protecció de dades i accepto el tractament de les meves dades per gestionar aquesta opinió.',
      'form.submit': 'Enviar la meva opinió',
      'form.sending': 'Enviant…',
      'form.invalid': 'Revisa els camps marcats en vermell.',
      'form.error': "No s'ha pogut enviar. Torna-ho a provar d'aquí a una estona.",
      'form.activation': "El formulari encara no està activat. Cal confirmar el correu d'activació que ha enviat FormSubmit.",
      'form.thanksTitle': 'Moltes gràcies!',
      'form.thanksText': 'Hem rebut la teva opinió i la llegirem amb atenció.',
      'form.thanksDemo': "Mode demostració: el formulari ha funcionat correctament, però encara no s'ha enviat cap dada.",
      'about.title': 'Qui som',
      'about.text': 'A DPB ajudem negocis i projectes a comunicar millor, vendre millor i treballar de manera més pràctica, combinant creativitat, estratègia i tecnologia.',
      'about.langs': 'Treballem en català, castellà, francès i anglès.',
      'svc.web': 'Disseny i desenvolupament web',
      'svc.webD': 'Creem i millorem pàgines web pensades per comunicar bé, transmetre confiança i adaptar-se a cada projecte.',
      'svc.shop': 'Botigues en línia',
      'svc.shopD': "Desenvolupem botigues en línia clares i funcionals, orientades a facilitar la gestió i millorar l'experiència de compra.",
      'svc.seo': 'SEO i màrqueting digital',
      'svc.seoD': 'Treballem el posicionament, la visibilitat i la captació perquè cada negoci arribi a més persones.',
      'svc.social': 'Xarxes socials i Google Business Profile',
      'svc.socialD': "Ajudem a cuidar la presència digital del negoci, millorar-ne la imatge i reforçar-ne la visibilitat local.",
      'svc.design': 'Disseny gràfic, publicitat i comunicació',
      'svc.designD': 'Dissenyem peces visuals i missatges que reforcen la identitat de marca i fan més clara la comunicació.',
      'svc.hosting': 'Allotjament, dominis, correu i suport',
      'svc.hostingD': 'Oferim acompanyament tècnic en aspectes clau perquè tot funcioni amb estabilitat i tranquil·litat.',
      'svc.automation': 'Automatització de processos',
      'svc.automationD': "Busquem maneres d'estalviar temps i simplificar tasques amb automatitzacions útils i ben pensades.",
      'svc.ai': 'Intel·ligència artificial i eines a mida',
      'svc.aiD': 'Explorem solucions pràctiques amb IA i desenvolupem eines personalitzades quan el projecte ho necessita.',
      'testi.eyebrow': 'Testimonis',
      'testi.title': 'El que més es valora de treballar amb nosaltres',
      'testi.note': "Textos d'exemple. Aquí hi mostrarem testimonis reals seleccionats a mà, sempre amb l'autorització expressa dels seus autors.",
      'testi.tag': 'Exemple',
      'testi.q1': '“Tracte proper, solucions clares i una manera de treballar molt pràctica.”',
      'testi.q2': '“Ens vam sentir acompanyats durant tot el procés.”',
      'testi.q3': '“Es nota la combinació de disseny, criteri i suport tècnic.”',
      'footer.place': 'Andorra',
      'footer.tagline': 'Disseny · Comunicació · Tecnologia',
      'footer.contact': "Vols comentar-nos alguna cosa? Deixa'ns el teu missatge a través del formulari.",
      'footer.contactLink': 'Anar al formulari →'
    },
    fr: {
      'meta.title': 'DPB · Ideas Visuales · Votre avis',
      'test.banner': 'Environnement de test · Utilisez uniquement des données fictives',
      'nav.about': 'Qui sommes-nous',
      'nav.reviews': 'Avis',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Design, communication et technologie · Andorre',
      'hero.title': 'Votre avis est l’une des meilleures façons de nous aider à grandir.',
      'hero.lead': 'Si vous avez travaillé avec nous, nous serions ravis de savoir comment s’est passée votre expérience. Votre avis nous aide à nous améliorer et guide aussi de futurs clients.',
      'hero.cta': 'Donner mon avis',
      'hero.cta2': 'Découvrir DPB',
      'hero.kicker': 'Studio en Andorre',
      'hero.v1': 'Proximité',
      'hero.v1d': 'Une relation directe et personnelle sur chaque projet.',
      'hero.v2': 'Solutions sur mesure',
      'hero.v2d': 'Chaque proposition est adaptée à vos besoins.',
      'hero.v3': 'Design et technologie',
      'hero.v3d': 'Créativité et rigueur technique, ensemble.',
      'hero.chipLangs': 'Nous travaillons en 4 langues',
      'hero.chipTime': 'pour donner votre avis',
      'form.title': 'Donnez-nous votre avis',
      'form.intro': 'Votre commentaire nous aide à nous améliorer et, si vous le souhaitez, il peut aussi devenir un témoignage utile pour d’autres personnes.',
      'steps.1': 'Vos coordonnées',
      'steps.2': 'Votre commentaire',
      'steps.3': 'Votre évaluation',
      'steps.4': 'Publication (facultatif)',
      'steps.note': 'Ce que vous écrivez reste privé, sauf si vous nous autorisez à le publier.',
      'form.secA': 'Vos coordonnées',
      'form.name': 'Nom et prénom',
      'form.company': 'Entreprise',
      'form.optional': '(facultatif)',
      'form.email': 'Adresse e-mail',
      'form.emailHelp': 'Elle ne sera jamais publiée. Nous ne l’utiliserons que si nous devons vous répondre.',
      'form.secB': 'Votre commentaire',
      'form.comment': 'Votre commentaire',
      'form.commentPh': 'Dites-nous ce que vous avez apprécié, comment s’est passée votre expérience ou ce que nous pourrions améliorer.',
      'form.secC': 'Votre évaluation',
      'form.rating': 'Satisfaction générale',
      'form.ratingHelp': '1 = pas du tout satisfait · 5 = très satisfait',
      'form.recommend': 'Nous recommanderiez-vous ?',
      'form.yes': 'Oui',
      'form.maybe': 'Peut-être',
      'form.no': 'Non',
      'pub.title': 'Souhaitez-vous que nous puissions publier votre avis ?',
      'pub.text': 'Nous ne publierons votre commentaire qu’avec votre autorisation expresse. Sinon, il restera uniquement à usage interne.',
      'pub.no': 'Non, mon avis est uniquement à usage interne.',
      'pub.yes': 'Oui, j’autorise la publication de mon commentaire et de ma note comme témoignage.',
      'privacy.title': 'Informations sur la protection des données',
      'privacy.short': 'Vos données seront utilisées uniquement pour gérer cet avis. Si vous autorisez la publication, nous n’afficherons que les informations nécessaires au témoignage.',
      'privacy.more': 'En savoir plus',
      'privacy.text': 'Responsable : DPB – Disseny Public Bucles (Andorre). Finalité : gérer votre avis et, uniquement si vous l’autorisez, le publier comme témoignage. L’adresse e-mail n’est jamais publiée. Vous pouvez exercer vos droits d’accès, de rectification, de suppression et d’opposition, et retirer l’autorisation de publication à tout moment en nous contactant. Réglementation applicable : Loi 29/2021 qualifiée de protection des données personnelles d’Andorre.',
      'privacy.processor': 'Pendant cette phase de test, les données sont envoyées par e-mail via le service FormSubmit.',
      'form.privacy': 'J’ai lu les informations sur la protection des données et j’accepte le traitement de mes données pour gérer cet avis.',
      'form.submit': 'Envoyer mon avis',
      'form.sending': 'Envoi en cours…',
      'form.invalid': 'Vérifiez les champs marqués en rouge.',
      'form.error': 'L’envoi a échoué. Réessayez dans quelques instants.',
      'form.activation': 'Le formulaire n’est pas encore activé. Il faut confirmer l’e-mail d’activation envoyé par FormSubmit.',
      'form.thanksTitle': 'Merci beaucoup !',
      'form.thanksText': 'Nous avons bien reçu votre avis et nous le lirons avec attention.',
      'form.thanksDemo': 'Mode démonstration : le formulaire a fonctionné correctement, mais aucune donnée n’a encore été envoyée.',
      'about.title': 'Qui sommes-nous',
      'about.text': 'Chez DPB, nous aidons les entreprises et les projets à mieux communiquer, mieux vendre et travailler de façon plus pratique, en alliant créativité, stratégie et technologie.',
      'about.langs': 'Nous travaillons en catalan, espagnol, français et anglais.',
      'svc.web': 'Conception et développement web',
      'svc.webD': 'Nous créons et améliorons des sites web pensés pour bien communiquer, inspirer confiance et s’adapter à chaque projet.',
      'svc.shop': 'Boutiques en ligne',
      'svc.shopD': 'Nous développons des boutiques en ligne claires et fonctionnelles, pensées pour simplifier la gestion et améliorer l’expérience d’achat.',
      'svc.seo': 'SEO et marketing digital',
      'svc.seoD': 'Nous travaillons le référencement, la visibilité et l’acquisition pour aider chaque entreprise à toucher davantage de personnes.',
      'svc.social': 'Réseaux sociaux et Google Business Profile',
      'svc.socialD': 'Nous aidons à soigner la présence digitale de l’entreprise, à améliorer son image et à renforcer sa visibilité locale.',
      'svc.design': 'Design graphique, publicité et communication',
      'svc.designD': 'Nous concevons des supports visuels et des messages qui renforcent l’identité de marque et clarifient la communication.',
      'svc.hosting': 'Hébergement, domaines, e-mail et support',
      'svc.hostingD': 'Nous assurons un accompagnement technique sur les points clés pour que tout fonctionne avec stabilité et sérénité.',
      'svc.automation': 'Automatisation des processus',
      'svc.automationD': 'Nous cherchons des moyens de gagner du temps et de simplifier les tâches grâce à des automatisations utiles et bien pensées.',
      'svc.ai': 'Intelligence artificielle et outils sur mesure',
      'svc.aiD': 'Nous explorons des solutions pratiques avec l’IA et développons des outils personnalisés lorsque le projet le demande.',
      'testi.eyebrow': 'Témoignages',
      'testi.title': 'Ce que l’on apprécie le plus en travaillant avec nous',
      'testi.note': 'Textes d’exemple. Nous publierons ici de vrais témoignages, sélectionnés à la main et toujours avec l’autorisation expresse de leurs auteurs.',
      'testi.tag': 'Exemple',
      'testi.q1': '« Un accompagnement proche, des solutions claires et une façon de travailler très pratique. »',
      'testi.q2': '« Nous nous sommes sentis accompagnés tout au long du processus. »',
      'testi.q3': '« On sent l’alliance du design, du bon sens et du support technique. »',
      'footer.place': 'Andorre',
      'footer.tagline': 'Design · Communication · Technologie',
      'footer.contact': 'Vous souhaitez nous dire quelque chose ? Laissez-nous votre message via le formulaire.',
      'footer.contactLink': 'Aller au formulaire →'
    },
    en: {
      'meta.title': 'DPB · Ideas Visuales · Your feedback',
      'test.banner': 'Test environment · Please use fictitious data only',
      'nav.about': 'About us',
      'nav.reviews': 'Feedback',
      'nav.contact': 'Contact',
      'hero.eyebrow': 'Design, communication & technology · Andorra',
      'hero.title': 'Your feedback is one of the best ways to help us grow.',
      'hero.lead': 'If you have worked with us, we would love to hear about your experience. Your feedback helps us improve and also guides future clients.',
      'hero.cta': 'Leave my feedback',
      'hero.cta2': 'Get to know DPB',
      'hero.kicker': 'Studio in Andorra',
      'hero.v1': 'A personal approach',
      'hero.v1d': 'Direct, personal contact on every project.',
      'hero.v2': 'Tailored solutions',
      'hero.v2d': 'Every proposal adapted to what you need.',
      'hero.v3': 'Design & technology',
      'hero.v3d': 'Creativity and technical judgement, together.',
      'hero.chipLangs': 'We work in 4 languages',
      'hero.chipTime': 'to leave your feedback',
      'form.title': 'Share your feedback',
      'form.intro': 'Your comment helps us improve and, if you wish, it can also become a useful testimonial for others.',
      'steps.1': 'Your details',
      'steps.2': 'Your comment',
      'steps.3': 'Your rating',
      'steps.4': 'Publication (optional)',
      'steps.note': 'What you write stays private unless you authorise us to publish it.',
      'form.secA': 'Your details',
      'form.name': 'Full name',
      'form.company': 'Company',
      'form.optional': '(optional)',
      'form.email': 'Email',
      'form.emailHelp': 'It will never be published. We will only use it if we need to reply to you.',
      'form.secB': 'Your comment',
      'form.comment': 'Your comment',
      'form.commentPh': 'Tell us what you liked, how your experience was or what we could improve.',
      'form.secC': 'Your rating',
      'form.rating': 'Overall satisfaction',
      'form.ratingHelp': '1 = not satisfied at all · 5 = very satisfied',
      'form.recommend': 'Would you recommend us?',
      'form.yes': 'Yes',
      'form.maybe': 'Maybe',
      'form.no': 'No',
      'pub.title': 'Would you like us to be able to publish your feedback?',
      'pub.text': 'We will only publish your comment if you give us express permission. Otherwise, it will remain for internal use only.',
      'pub.no': 'No, my feedback is for internal use only.',
      'pub.yes': 'Yes, I authorise publishing my comment and rating as a testimonial.',
      'privacy.title': 'Data protection information',
      'privacy.short': 'Your data will only be used to manage this feedback. If you authorise publication, we will only show the information needed for the testimonial.',
      'privacy.more': 'More information',
      'privacy.text': 'Controller: DPB – Disseny Public Bucles (Andorra). Purpose: to manage your feedback and, only if you authorise it, publish it as a testimonial. Your email address is never published. You may exercise your rights of access, rectification, erasure and objection, and withdraw your publication consent at any time, by contacting us. Applicable law: Andorran Qualified Law 29/2021 on the protection of personal data.',
      'privacy.processor': 'During this test phase, data is sent by email through the FormSubmit service.',
      'form.privacy': 'I have read the data protection information and agree to the processing of my data to manage this feedback.',
      'form.submit': 'Send my feedback',
      'form.sending': 'Sending…',
      'form.invalid': 'Please check the fields marked in red.',
      'form.error': 'It could not be sent. Please try again in a moment.',
      'form.activation': 'The form is not activated yet. The activation email sent by FormSubmit must be confirmed.',
      'form.thanksTitle': 'Thank you very much!',
      'form.thanksText': 'We have received your feedback and will read it carefully.',
      'form.thanksDemo': 'Demo mode: the form worked correctly, but no data has been sent yet.',
      'about.title': 'About us',
      'about.text': 'At DPB we help businesses and projects communicate better, sell better and work more practically, combining creativity, strategy and technology.',
      'about.langs': 'We work in Catalan, Spanish, French and English.',
      'svc.web': 'Web design & development',
      'svc.webD': 'We create and improve websites designed to communicate clearly, build trust and fit each project.',
      'svc.shop': 'Online stores',
      'svc.shopD': 'We build clear, functional online stores that make management easier and improve the shopping experience.',
      'svc.seo': 'SEO & digital marketing',
      'svc.seoD': 'We work on positioning, visibility and lead generation to help each business reach more people.',
      'svc.social': 'Social media & Google Business Profile',
      'svc.socialD': 'We help look after the business’s digital presence, improve its image and strengthen its local visibility.',
      'svc.design': 'Graphic design, advertising & communication',
      'svc.designD': 'We design visual pieces and messages that reinforce brand identity and make communication clearer.',
      'svc.hosting': 'Hosting, domains, email & support',
      'svc.hostingD': 'We provide technical support on key aspects so that everything runs reliably and smoothly.',
      'svc.automation': 'Process automation',
      'svc.automationD': 'We look for ways to save time and simplify tasks through useful, well-thought-out automations.',
      'svc.ai': 'Artificial intelligence & custom tools',
      'svc.aiD': 'We explore practical AI solutions and build custom tools when a project needs them.',
      'testi.eyebrow': 'Testimonials',
      'testi.title': 'What people value most about working with us',
      'testi.note': 'Sample texts. This is where we will show real testimonials, hand-picked and always with the express permission of their authors.',
      'testi.tag': 'Example',
      'testi.q1': '“A personal approach, clear solutions and a very practical way of working.”',
      'testi.q2': '“We felt supported throughout the whole process.”',
      'testi.q3': '“You can tell they combine design, good judgement and technical support.”',
      'footer.place': 'Andorra',
      'footer.tagline': 'Design · Communication · Technology',
      'footer.contact': 'Want to tell us something? Leave us a message through the form.',
      'footer.contactLink': 'Go to the form →'
    }
  };

  var LANGS = ['ca', 'es', 'fr', 'en'];
  var current = 'es';

  // Etiquetes dels correus que rep l'empresa (sempre en castellà)
  var LABELS = T.es;

  function t(key) { return (T[current] && T[current][key]) || T.es[key] || key; }

  function detectLang() {
    var fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    try {
      var saved = localStorage.getItem('dpb-lang');
      if (LANGS.indexOf(saved) !== -1) return saved;
    } catch (e) { /* sense emmagatzematge */ }
    var nav = navigator.languages || [navigator.language || 'es'];
    for (var i = 0; i < nav.length; i++) {
      var code = String(nav[i]).slice(0, 2).toLowerCase();
      if (LANGS.indexOf(code) !== -1) return code;
    }
    return 'es';
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

  // Mode d'enviament: php (hosting propi) · formsubmit (GitHub Pages) · demo (sense enviament)
  var mode = CONFIG.phpEndpoint ? 'php' : (CONFIG.formsubmit ? 'formsubmit' : 'demo');

  document.getElementById('testbar').hidden = !CONFIG.testMode;
  document.getElementById('privacy-processor').hidden = mode !== 'formsubmit';
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('ts-field').value = Math.floor(Date.now() / 1000);

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.getAttribute('data-lang')); });
  });
  applyLang(detectLang());

  // ---------- Formulari ----------
  var form = document.getElementById('review-form');
  var status = document.getElementById('form-status');
  var f = form.elements;

  function setStatus(msg, kind) {
    status.textContent = msg;
    status.className = 'status' + (kind ? ' ' + kind : '');
  }

  function validate() {
    var ok = true;
    form.querySelectorAll('.invalid, .invalid-group').forEach(function (el) {
      el.classList.remove('invalid', 'invalid-group');
    });
    ['name', 'email', 'comment'].forEach(function (id) {
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

  // Dades llegibles per al correu que rep l'empresa
  function summary() {
    var rating = Number(f.rating.value);
    var rec = f.recommend.value;
    return {
      rating: rating,
      rows: [
        ['Nombre', f.name.value.trim()],
        ['Empresa', f.company.value.trim() || '—'],
        ['Correo', f.email.value.trim() || '—'],
        ['Comentario', f.comment.value.trim()],
        ['Satisfacción', '★★★★★'.slice(0, rating) + '☆☆☆☆☆'.slice(0, 5 - rating) + ' (' + rating + '/5)'],
        ['Recomendaría', rec ? LABELS['form.' + rec] : '—'],
        ['Publicación', f.publish.value === 'yes' ? 'SÍ, autoriza publicarla como testimonio' : 'NO, solo uso interno'],
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
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      body.append('_subject', (CONFIG.testMode ? '[PRUEBA] ' : '') + 'Nueva opinión (' + s.rating + '/5) · ' + f.name.value.trim());
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
