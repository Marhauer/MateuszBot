require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js'); //Client = Bot

//https://discord.com/developers/docs/topics/gateway#list-of-intents
const client =  new Client({
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
})

client.on('messageCreate', (msg) => {

    console.log(msg);

    if(msg.author.bot) {
        return;
    }


    if(msg.author.username === 'meowzer4k') {
        msg.reply("certified by Mateusz");
    }

    if(msg.content === 'Hey') {
        msg.reply('Hello!');
    }
});

//Token
client.login(process.env.TOKEN);