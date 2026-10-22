# Modo "Escríbeme" del teclado: cómo activar los mensajes

El teclado de la sección "Un respiro" tiene un modo **Escríbeme**. Ahí, quien visita escribe un mensaje y a dónde responderle, y la función [`api/contact.js`](../api/contact.js) en Vercel se lo reenvía a Mich.

La función tiene dos canales. Cada uno se enciende solo cuando sus variables de entorno existen en Vercel, y basta con que uno entregue el mensaje.

| Canal | Variables en Vercel |
|---|---|
| WhatsApp (CallMeBot) | `CALLMEBOT_PHONE`, `CALLMEBOT_APIKEY` |
| Telegram (bot oficial) | `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` |

Si no hay ningún canal configurado, el teclado muestra "No se pudo enviar".

## WhatsApp con CallMeBot

> Al 21 de octubre de 2026 el bot está **lleno**: su página oculta el número y pide volver en unos días. Revisa <https://www.callmebot.com/blog/free-api-whatsapp-messages/>.

1. Abre la página de arriba y copia el número del bot (empieza con +34).
2. Guárdalo en los contactos de tu teléfono.
3. Desde tu WhatsApp, mándale exactamente: `I allow callmebot to send me messages`
4. Espera la respuesta "API Activated for your phone number. Your APIKEY is …". Si no llega en 2 minutos, intenta de nuevo en 24 horas.
5. En Vercel ve a **Project → Settings → Environment Variables** y agrega, para *Production*:
   - `CALLMEBOT_PHONE`: tu número con código de país, por ejemplo `+525578934420`.
   - `CALLMEBOT_APIKEY`: la clave que te mandó el bot.
6. Haz un redeploy para que la función lea las variables.

La API gratis de CallMeBot es solo para uso personal, y el texto del mensaje pasa por sus servidores.

## Telegram (funciona hoy)

1. En Telegram abre **@BotFather**, manda `/newbot` y sigue los pasos. Al final te da un **token** como `123456:ABC…`.
2. Abre el chat con tu bot nuevo y mándale cualquier mensaje, por ejemplo "hola".
3. En el navegador abre `https://api.telegram.org/bot<TOKEN>/getUpdates`, con tu token en lugar de `<TOKEN>`, y copia el número de `"chat":{"id": …}`.
4. En Vercel agrega `TELEGRAM_BOT_TOKEN` y `TELEGRAM_CHAT_ID` y haz un redeploy.

## Protecciones contra spam

- Solo acepta peticiones desde el propio sitio (cabecera `Origin`).
- Tiene un campo oculto trampa y exige al menos 1.5 s de escritura.
- Mensaje de máximo 500 caracteres y contacto de máximo 120.
- Máximo 3 envíos cada 10 minutos por IP. Es de mejor esfuerzo, porque cada instancia de la función lleva su propia cuenta.

Si llega spam de verdad, el siguiente paso sería agregar Cloudflare Turnstile y un límite compartido (Vercel KV o el firewall de Vercel).

## Revisar que funciona

En Vercel ve a **Project → Logs** y filtra por `contact:`. Cada envío deja una línea como `{"whatsapp":true,"telegram":null}`:

- `true`: ese canal entregó el mensaje.
- `false`: ese canal falló; si es CallMeBot, la línea anterior trae su respuesta.
- `null`: ese canal no está configurado.

El servidor de desarrollo de Astro (`npm run dev`) no ejecuta funciones de Vercel. Para probar en local usa `vercel dev`.
