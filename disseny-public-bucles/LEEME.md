# Disseny Public Bucles · Landing de reseñas

Página minimalista (catalán, castellano y francés) con un formulario para que los clientes dejen su reseña. Cada reseña llega por email y se guarda también en una copia CSV.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La página |
| `assets/styles.css` | El diseño |
| `assets/app.js` | Los 3 idiomas y el envío del formulario |
| `enviar.php` | Recibe el formulario y envía el email |
| `config.example.php` | Plantilla de configuración |

## Instalación en tu hosting

1. Sube toda la carpeta `disseny-public-bucles` a tu hosting (por FTP o el gestor de archivos), por ejemplo en `tudominio.cat/opinions/`.
2. Copia `config.example.php` y renómbralo como **`config.php`**.
3. Edita `config.php`:
   - `to_email`: tu email, donde quieres recibir las reseñas.
   - `from_email`: una dirección **de tu propio dominio** (p. ej. `ressenyes@tudominio.cat`). Si usas una de Gmail, los correos acabarán en spam.
4. Abre la página, envía una reseña de prueba y comprueba que te llega.

`config.php` no se sube nunca a GitHub (está en `.gitignore`), así tu email y tus contraseñas no quedan públicos.

## Si los emails no llegan

Muchos hostings limitan la función `mail()` de PHP. En ese caso, usa SMTP:

1. En la carpeta del proyecto, ejecuta `composer require phpmailer/phpmailer` (o pide al hosting que lo haga).
2. En `config.php`, pon `'enabled' => true` dentro de `smtp` y rellena servidor, usuario y contraseña de la cuenta de correo de tu dominio.

## Copia de seguridad (CSV)

Cada reseña se guarda en `data/ressenyes.csv`, que se abre con Excel. Si el servidor es **Apache**, la carpeta queda protegida automáticamente. Si es **Nginx**, o para más seguridad, cambia `data_dir` en `config.php` a una carpeta fuera de la parte pública del web.

## Protección contra spam

- Campo oculto "trampa" que solo rellenan los robots.
- Rechazo de envíos hechos en menos de 3 segundos.
- Máximo de 5 envíos por hora desde la misma conexión (ajustable).

## Idiomas

El idioma se detecta automáticamente según el navegador. También se puede forzar con `?lang=ca`, `?lang=es` o `?lang=fr` en la dirección (útil para enviar enlaces a clientes de cada idioma). Los textos están en `assets/app.js`.
