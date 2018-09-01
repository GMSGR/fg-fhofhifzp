const Discord = require('discord.js');
const client = new Discord.Client();

client.on('prêt', () => {
    console.log('Je suis prêt!');
});

client.on('message', message ==> {
    if (message.content === 'ping') {
      message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);
