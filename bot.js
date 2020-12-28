require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const CronJob = require('cron').CronJob;

client.login(process.env.BOT_TOKEN);

const gatito1 = 'https://i.imgur.com/CEbkjll.jpeg' ;
const gatito2 = 'https://i.imgur.com/60aGajj.jpg';
const gatito3 = 'https://imgur.com/SU0vpH0';
const gatito4 = 'https://i.pinimg.com/564x/11/7f/cd/117fcd17c24efc738a8697e02e81b103.jpg';
const gatito5 = 'https://i.imgur.com/KWvtdg0.mp4';
const gatito6 = 'https://i.pinimg.com/originals/8a/df/cf/8adfcf0b90aef150f56374c3dda25ede.png';
const gatito7 = 'https://i.imgur.com/ryh89Vx.mp4';
const gatito8 = 'https://i.pinimg.com/originals/0d/cf/dc/0dcfdc28e45540f709ee305ec4ff5289.jpg';
const gatito9 = 'https://imgur.com/aifOQYw';
const gatito10 = 'https://i.pinimg.com/564x/c3/10/5c/c3105cee5f7f39fb7936993204b732fb.jpg';

const gatitos = [gatito1, gatito2, gatito3, gatito4, gatito5, gatito6, gatito7, gatito8, gatito9, gatito10];

const raidOne = {
    day: 'Tuesday',
    dayNum: 2,
    time: '1am st / 6pm cst'
}

const raidTwo = {
    day: 'Wednesday',
    dayNum: 3,
    time: '3:30am st / 9:30pm cst'
}


    
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

let raidTime;

if(n === raidOne.day){
    raidTime = raidOne.time
}else if(n === raidTwo.day){
    raidTime = raidTwo.time
};

const frase0 = `@core Hey poopies! dont forget we have raid today at ${raidTime}`;
const frase1 = `@core remember we have raid today at ${raidTime}, dont be late <3`;
const frase2 = `@core friendly uwu reminder that we have raid today at ${raidTime}`;


const reminder = [frase0, frase1, frase2];


const random = Math.floor(Math.random() * 10);
const randomFrase = Math.floor(Math.random() * 3);
    
    const anunChannelId = '747734434677260328' ;
    const testChannelId = '790406605438189598'
 
client.on('ready', ()=> {
    console.log('Bot ready');
    
    const raidOneAn = new CronJob(`0 30 15 * * ${raidOne.dayNum}`, () => {

        client.channels.cache.get(testChannelId).send(`${reminder[randomFrase]}`)
        client.channels.cache.get(testChannelId).send(`${gatitos[random]}`)

    });

    raidOneAn.start()

    const raidTwoAn = new CronJob(`0 30 15 * * ${raidTwo.dayNum}`, () => {

        client.channels.cache.get(testChannelId).send(`${reminder[randomFrase]}`)
        client.channels.cache.get(testChannelId).send(`${gatitos[random]}`)

    });

    raidTwoAn.start()

})




client.on('message', msg => {
    if( (msg.author.id != 790376929274232872) && (msg.content.includes('uwu')) 
    || msg.content.includes('UWU') || (msg.content.includes('Uwu')) ){
        msg.channel.send('owo') 

    } else if( (msg.author.id != 790376929274232872) && (msg.content.includes('owo')) 
    || msg.content.includes('OWO') || (msg.content.includes('Owo')) ){
        msg.channel.send('uwu')

    } else if(msg.content === '!log'){
        msg.channel.send('@core https://tenor.com/view/log-power-fire-burning-mad-gif-16474420')

    } else if( msg.content === '!gatitos' || msg.content === '!gatito' ){
        const random = Math.floor(Math.random() * 10);
        msg.channel.send(gatitos[random]);
    }
})

