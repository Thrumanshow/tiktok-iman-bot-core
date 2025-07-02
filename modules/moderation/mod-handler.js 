// modules/moderation/mod-handler.js module.exports = { handleCommand: async (message) => { const [command, ...args] = message.content.trim().split(' ');

if (command === '!ban' && message.member.permissions.has('BAN_MEMBERS')) { const member = message.mentions.members.first(); if (member) { await member.ban({ reason: 'Acción moderada por el bot de HormigasAIS' }); message.channel.send(`🛡️ Usuario ${member.user.tag} ha sido baneado.`); } } if (command === '!kick' && message.member.permissions.has('KICK_MEMBERS')) { const member = message.mentions.members.first(); if (member) { await member.kick('Expulsado por el bot de HormigasAIS'); message.channel.send(`🛡️ Usuario ${member.user.tag} fue expulsado.`); } } 

} };

// listeners/welcome.js module.exports = (client) => { client.on('guildMemberAdd', (member) => { const channel = member.guild.systemChannel; if (channel) { channel.send(👋 Bienvenido/a al servidor, ${member.user.username}! Sos parte de la red HormigasAIS 🐜🧠); } }); };

// modules/logger/log-events.js module.exports = (client) => { client.on('messageDelete', (message) => { const logChannel = message.guild.channels.cache.find(c => c.name === 'log-bot'); if (logChannel) { logChannel.send(🗑️ Mensaje borrado por ${message.author.tag}: "${message.content}"); } }); };

