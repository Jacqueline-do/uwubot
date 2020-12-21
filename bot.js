require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', ()=> {
    console.log('Bot ready');
})

client.login(process.env.BOT_TOKEN);

client.on('message', msg =>{
    if (msg.content === 'uwu' || msg.content === 'UWU' || msg.content === 'Uwu'){
        msg.reply('owo');
    } else if (msg.content === 'owo' || msg.content === 'OWO' || msg.content === 'Owo'){
        msg.reply('uwu')
    }
})

client.on('message', msg => {
    if(msg.content === '!log'){
        msg.channel.send('https://tenor.com/view/log-power-fire-burning-mad-gif-16474420')
    }
})