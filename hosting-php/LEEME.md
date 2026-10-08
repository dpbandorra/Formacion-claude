# Versión para hosting propio (PHP)

Esta carpeta guarda la parte de servidor para cuando la landing pase al hosting de DPB. **No se usa en GitHub Pages**, que no ejecuta PHP.

| Archivo | Para qué sirve |
|---|---|
| `enviar.php` | Recibe el formulario, envía el email y guarda una copia en CSV |
| `config.example.php` | Plantilla de configuración (email de destino, SMTP…) |
| `.gitignore` | Evita que `config.php` y los datos se suban a GitHub |

## Montaje en el hosting

1. Copia en una carpeta del servidor el contenido de `docs/` (la landing) y los archivos de esta carpeta.
2. En `assets/config.js`, cambia `phpEndpoint: ''` por `phpEndpoint: 'enviar.php'` y `testMode` por `false`.
3. Copia `config.example.php` como **`config.php`** y rellena:
   - `to_email`: el correo donde llegarán las opiniones.
   - `from_email`: una dirección **del propio dominio** (p. ej. `opinions@vuestrodominio.ad`), para que los correos no acaben en spam.
4. Envía una opinión de prueba.
5. Quita la línea `<meta name="robots" content="noindex">` de `index.html` si quieres que Google indexe la página.

`config.php` no debe subirse nunca a GitHub.

## Si los emails no llegan

Algunos hostings limitan la función `mail()` de PHP. En ese caso:

1. Ejecuta `composer require phpmailer/phpmailer` en la carpeta.
2. En `config.php`, activa `smtp` y rellena servidor, usuario y contraseña de una cuenta de correo del dominio.

## Copia CSV

Cada opinión se guarda en `data/ressenyes.csv`, que se abre con Excel. En Apache, la carpeta se protege automáticamente. En Nginx, cambia `data_dir` a una carpeta fuera de la parte pública del web.

## Antispam

- Campo oculto "trampa".
- Se ignoran los envíos hechos en menos de 3 segundos.
- Máximo 5 envíos por hora desde la misma conexión.
