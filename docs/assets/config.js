/*
 * Configuració de l'enviament del formulari.
 *
 * - formsubmit: correu (o àlies de FormSubmit) on arriben les opinions.
 *   Servei gratuït que funciona amb GitHub Pages. Si és buit, el formulari
 *   funciona en MODE DEMOSTRACIÓ: valida i mostra l'agraïment, però no envia res.
 * - phpEndpoint: per al hosting propi (carpeta hosting-php), posa 'enviar.php'.
 *   Té prioritat sobre formsubmit.
 * - testMode: mostra la franja "Entorn de proves · només dades fictícies".
 */
window.DPB_CONFIG = {
  formsubmit: 'dpbempresa@gmail.com',
  phpEndpoint: '',
  testMode: true
};
