require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const CronJob = require('cron').CronJob;

client.login(process.env.BOT_TOKEN);

//
//ids 

const coreRoleId = '756960788455096683' ;
const anunChannelId = '747734434677260328' ;
const testChannelId = '790406605438189598' ;
const dinosOnlyId = '453265262851129344';
const testRoleId = '797134085586812978';

const groupTwoChannelId = '808111352270946304';
const coreTwoRoleId = '809655008165101578';

//
//gatitos

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

//
//raid info

const raidOne = {
    day: 'Thursday',
    dayNum: 4,
    time: '1:00am st / 8:00pm est'
}

const raidTwo = {
    day: 'Friday',
    dayNum: 5,
    time: '2:30am st / 9:30pm est'
}

const coreTwoRaid = {
    day: 'Monday',
    dayNum: 1,
    time: '2:00am st / 9:00pm est'
}

//
//reminders

const frase0 = `<@&${coreRoleId}> Hey poopies! dont forget we have raid today at ${raidOne.time}, dont be late!`;
const frase1 = `<@&${coreRoleId}> remember we have raid today at ${raidOne.time}, dont be late!`;
const frase2 = `<@&${coreRoleId}> friendly uwu reminder that we have raid today at ${raidOne.time}, dont be late!`;

const reminderOne = [frase0, frase1, frase2];

const fraseDayTwo0 = `<@&${coreRoleId}> Hey poopies! we have raid today at ${raidTwo.time}, dont be late!`;
const fraseDayTwo1 = `<@&${coreRoleId}> remember we have raid today at ${raidTwo.time}, dont be late!`;
const fraseDayTwo2 = `<@&${coreRoleId}> friendly uwu reminder that we are raiding today at ${raidTwo.time}, dont be late!`;

const reminderTwo = [fraseDayTwo0, fraseDayTwo1, fraseDayTwo2];

//
//bot on

client.on('ready', ()=> {
    console.log('Bot ready');

    client.channels.cache.get(testChannelId).send(`<@&${testRoleId}> bot on uwu`)
    
    const raidOneAn = new CronJob(`0 30 15 * * ${raidOne.dayNum}`, () => {

        const random = Math.floor(Math.random() * 10);
        const randomFrase = Math.floor(Math.random() * 3);

        client.channels.cache.get(anunChannelId).send(`${reminderOne[randomFrase]}`)
        client.channels.cache.get(anunChannelId).send(`${gatitos[random]}`)

    });

    raidOneAn.start()

     const raidTwoAn = new CronJob(`0 30 15 * * ${raidTwo.dayNum}`, () => {

        const random = Math.floor(Math.random() * 10);
        const randomFrase = Math.floor(Math.random() * 3);

        client.channels.cache.get(anunChannelId).send(`${reminderTwo[randomFrase]}`)
        client.channels.cache.get(anunChannelId).send(`${gatitos[random]}`)

    });

    raidTwoAn.start() 


    const coreTwoAn = new CronJob(`0 30 18 * * ${coreTwoRaid.dayNum}`, () => {

    client.channels.cache.get(groupTwoChannelId).send(` Hey beautiful people of <@&${coreTwoRoleId}>, we are raiding today at ${coreTwoRaid.time}, dont be late!`)


    });

    coreTwoAn.start() 

})


//
//bot replys

client.on('message', msg => {
    if( (msg.author.id != 790376929274232872) && (msg.content.toLowerCase().includes('uwu')) ){
        msg.channel.send('owo') 

    } else if( (msg.author.id != 790376929274232872) && (msg.content.toLowerCase().includes('owo')) ){
        msg.channel.send('uwu')

    } else if(msg.content === '!log'){
        msg.channel.send(`<@&${coreRoleId}> https://tenor.com/view/log-power-fire-burning-mad-gif-16474420`)

    } else if( msg.content === '!gatitos' || msg.content === '!gatito' ){
        const random = Math.floor(Math.random() * 10);
        msg.channel.send(gatitos[random]);
    }
})

