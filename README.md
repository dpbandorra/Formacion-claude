# Formacion-claude
Ejercicios y pruebas de formación con Claude.

## Landing de opiniones · DPB – Disseny Public Bucles

Página para que los clientes valoren los servicios recibidos y, si lo autorizan expresamente, permitan publicar su opinión como testimonio. Está disponible en catalán, castellano, francés e inglés.

| Carpeta | Contenido |
|---|---|
| `docs/` | La landing (HTML, CSS y JavaScript). Es lo que publica GitHub Pages. |
| `hosting-php/` | Envío por PHP para el hosting propio. GitHub Pages no lo usa. Ver `hosting-php/LEEME.md`. |

### Cómo se envía el formulario

Se configura en `docs/assets/config.js`:

| Ajuste | Resultado |
|---|---|
| `formsubmit` vacío (actual) | **Modo demostración**: valida el formulario y muestra el agradecimiento, pero no envía nada. |
| `formsubmit: 'correo'` | Envía cada opinión por email a través de FormSubmit (gratuito, compatible con GitHub Pages). |
| `phpEndpoint: 'enviar.php'` | Usa el `enviar.php` del hosting propio. |
| `testMode: true` | Muestra la franja "Entorno de pruebas · solo datos ficticios". |

### Publicación en GitHub Pages

Settings → Pages → *Deploy from a branch* → rama con la landing → carpeta `/docs`.
