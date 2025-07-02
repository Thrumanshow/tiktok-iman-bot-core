# 📡 Módulo `discord-notify` · Imán Bot Core

Este módulo maneja la **comunicación directa con Discord** utilizando webhooks. Es responsable de enviar notificaciones automatizadas sobre actividades del bot y de verificar la autenticidad de las solicitudes entrantes, en caso de usar Webhooks entrantes de GitHub o integraciones externas.

---

## 📦 Archivos incluidos

### `discord-notify.js`
Archivo principal encargado de:

- Enviar mensajes personalizados a un canal de Discord.
- Usar `axios` para hacer `POST` al webhook definido en la variable de entorno `DISCORD_WEBHOOK_URL`.

### `webhook-verifier.js`
Permite **verificar la firma de seguridad (secret)** que GitHub adjunta cuando envía una carga útil (payload) al webhook. Previene accesos maliciosos o falsificaciones.

---

## 🔐 Variables necesarias (.env)

Asegurate de tener en tu archivo `.env`:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/...
DISCORD_WEBHOOK_SECRET=clave_de_seguridad_opcional
