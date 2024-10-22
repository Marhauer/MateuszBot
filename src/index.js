require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

// Client = Bot
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMessageReactions,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.tag} is online.`);
});

const admin = ['967544510630494298', '527883760587505730', '1114948114193850388'];

// Message handler
client.on('messageCreate', (msg) => {
    // Ignore bot messages
    if (msg.author.bot) {
        return;
    }

    if (msg.content === 'attack maeu') {
        let x = 0;
        while(x < 10) {
            msg.channel.send("<@508324225807941632> https://tenor.com/view/trump-on-a-tank-american-flag-america-tank-trump-gif-3748826537574782585");            
            x++;
        }
    }

    if (msg.author.id === '527883760587505730') {
        msg.react("🤓");
        msg.reply("https://tenor.com/view/mod-discord-mod-nerd-glasses-speech-bubble-gif-27462011");
    }

    if (msg.author.id === '527883760587505730') {
        msg.react("🚗");
    }

    if (msg.author.id === '967544510630494298') {
        msg.react("👑");
    } 

    if (msg.author.id === '1114948114193850388') {
        msg.react("😎");
    }


});

// Token
client.login(process.env.TOKEN);