require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', ()=> {
    console.log('Bot ready');
    console.log(client.user.id)
})

client.login(process.env.BOT_TOKEN);

client.on('message', msg => {
    if( (msg.author.id != 790376929274232872) && (msg.content.includes('uwu')) 
    || msg.content.includes('UWU') || (msg.content.includes('Uwu')) ){
        msg.channel.send('owo')
    }
})

client.on('message', msg => {
    if( (msg.author.id != 790376929274232872) && (msg.content.includes('owo')) 
    || msg.content.includes('OWO') || (msg.content.includes('Owo')) ){
        msg.channel.send('uwu')
    }
})

client.on('message', msg => {
    if(msg.content === '!log'){
        msg.channel.send('@core https://tenor.com/view/log-power-fire-burning-mad-gif-16474420')
    }
})