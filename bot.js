require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const gatito1 = 'https://i.imgur.com/CEbkjll.jpeg' ;
const gatito2 = 'https://i.imgur.com/60aGajj.jpg';
const gatito3 = 'https://imgur.com/SU0vpH0';
const gatito4 = 'https://i.pinimg.com/564x/11/7f/cd/117fcd17c24efc738a8697e02e81b103.jpg';
const gatito5 = 'https://i.imgur.com/KWvtdg0.mp4';
const gatito6 = 'https://i.pinimg.com/originals/8a/df/cf/8adfcf0b90aef150f56374c3dda25ede.png';
const gatito7 = 'https://i.imgur.com/ryh89Vx.mp4';
const gatito8 = 'https://i.pinimg.com/originals/0d/cf/dc/0dcfdc28e45540f709ee305ec4ff5289.jpg';
const gatito9 = 'https://imgur.com/aifOQYw';
const gatito10 = 'https://i.pinimg.com/564x/2e/59/db/2e59dbca2dae586d1a89cc868a67d1d8.jpg';

const gatitos = [gatito1, gatito2, gatito3, gatito4, gatito5, gatito6, gatito7, gatito8, gatito9, gatito10];

var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var n = weekday[d.getDay()];

    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

client.on('ready', ()=> {
    console.log('Bot ready');
    console.log(client.user.id)
    console.log(n , h , m , s)
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

client.on('message', msg => {
    if( msg.content === '!gatitos' || msg.content === '!gatito' ){
        const random = Math.floor(Math.random() * 10);
        msg.channel.send(gatitos[random]);
    }
})

