// modules/logger/log-events.js

module.exports = (client) => {
  client.on('messageDelete', (message) => {
    const logChannel = message.guild.channels.cache.find(c => c.name === 'log-bot');
    if (logChannel) {
      logChannel.send(`🗑️ Mensaje borrado por ${message.author.tag}: "${message.content}"`);
    }
  });
}; 