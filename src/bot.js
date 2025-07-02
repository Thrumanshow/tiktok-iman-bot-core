// bot.js

const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const { handleCommand } = require('./modules/moderation/mod-handler');
const welcomeListener = require('./listeners/welcome');
const logEvents = require('./modules/logger/log-events');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`🤖 Bot conectado como ${client.user.tag}`);
});

// Módulos
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  await handleCommand(message);
});

welcomeListener(client);
logEvents(client);

client.login(process.env.DISCORD_BOT_TOKEN);