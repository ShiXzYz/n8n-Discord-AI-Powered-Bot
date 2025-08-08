const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const DISCORD_TOKEN = 'discord_bot_token_goes_here';
const N8N_WEBHOOK_URL = 'local_host_webhook_url_goes_here';

client.on('ready', () => {
  console.log(`🤖 Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async message => {
  if (message.author.bot) return;

  if (message.content.startsWith('!send ')) {
    const content = message.content.slice(6);
    const sessionId = `${message.channel.id}-${message.author.id}`;

    try {
      await axios.post(N8N_WEBHOOK_URL, {
        user: message.author.username,
        user_id: message.author.id,
        channel_id: message.channel.id,
        session_id: sessionId,
        feedback: content
      });
      await message.reply('✅ Message sent to n8n! Please go check the discord channels for the reply! 😊');
    } catch (err) {
      console.error('Error sending POST:', err.message);
      await message.reply('❌ Failed to send to n8n.');
    }
  }
});

client.login(DISCORD_TOKEN);
