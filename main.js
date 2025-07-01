import { listenToIssues } from './listeners/issue_listener.js';
import { impulsoXOXO } from './src/xoxo-impulsor.js';

listenToIssues();
impulsoXOXO(); // según la lógica que querés aplicar
const notifyDiscord = require('./src/discord-notify');

// Luego de iniciar el flujo de impulso
notifyDiscord(`🎯 Se ha activado un nuevo impulso para @chriswarriortv_  
📎 Video: https://vm.tiktok.com/@chriswarriortv_/video/ZMSCAyQFD  
🔥 Estado: En proceso por Imán Bot Core`);
