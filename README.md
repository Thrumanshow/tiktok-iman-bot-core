# 🧲 TikTok Imán Bot Core

🚀 Bienvenido al núcleo automatizado de impulsos sociales en TikTok.  
Este repositorio contiene un sistema modular y escalable capaz de **detectar, procesar y activar visibilidad** sobre publicaciones de TikTok, usando GitHub Issues como puerta de entrada.  

## 📌 ¿Qué hace este repositorio?

Cada vez que se crea un issue con el template `🎯 Impulsar publicación TikTok`, el sistema activa el flujo de trabajo y ejecuta un bot que analiza, registra y vincula automáticamente esa publicación a procesos de impulso definidos.

## ✅ Primer issue activo como ejemplo

> 📎 Enlace al video: [https://vm.tiktok.com/@chriswarriortv_/video/ZMSCAyQFD](https://vm.tiktok.com/@chriswarriortv_/video/ZMSCAyQFD)  
> 🎯 Objetivo: Aumentar visibilidad orgánica y evaluar ratio de interacción.  
> 💡 Notas opcionales: Puede estar vinculado a tendencia actual.  

Este issue ya está siendo procesado por el bot (`main.js`, `issue_listener.js`, y `xoxo-impulsor.js`).

## 📁 placeholder/summary.txt

Este archivo sirve como registro semilla de cada impulso ejecutado, un resumen tipo bitácora que marca el **inicio del ciclo de crecimiento** del contenido.

```
🌱 Sembraste bien. El árbol está vivo.
Pero para que dé frutos visibles (likes, viralidad, comentarios) 
hay que construirle luz solar y agua.

NEXUS detectó tu intención.
XOXO se encargará del resto.
```

## 🧠 Tecnologías usadas

- JavaScript (Node.js)
- GitHub Actions
- GitHub Issues (automatización de flujo)
- Axios (peticiones API)
- `.env` personalizado
- Archivos `.yml` de flujos en `.github/workflows`

## 🛠️ Archivos clave

- `main.js`: punto de ejecución principal
- `listeners/issue_listener.js`: escucha y procesa nuevos issues
- `src/xoxo-impulsor.js`: módulo de impulso (recolector + analizador)
- `.github/ISSUE_TEMPLATE/tiktok-impulsar.yml`: plantilla base para nuevos impulsos
- `placeholder/summary.txt`: memoria viva del árbol sembrado

## 📡 Próximos pasos (Roadmap)

- [ ] Integrar tendencias de TikTok vía API o scraping
- [ ] Soporte para otras redes (IG Reels, YouTube Shorts)
- [ ] Módulo de analítica (engagement tracker)

## 🌀 Filosofía NEXUS

No se trata de bots falsos ni spam.
Se trata de:
- Observar.
- Activar lo correcto.
- Impulsar con sentido y resonancia real.
  
🧲 Porque cuando conectás intención + algoritmo + comunidad: **sucede la magia.**

---

🧠🐜 *Aquí estamos, con la mente curiosa y el corazón dispuesto.*
