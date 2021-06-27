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
const gatito4 = 'https://i.pinimg.com/564x/ed/14/1f/ed141fab1824f04581b9a444ad0833f4.jpg';
const gatito5 = 'https://i.imgur.com/KWvtdg0.mp4';
const gatito6 = 'https://i.pinimg.com/originals/8a/df/cf/8adfcf0b90aef150f56374c3dda25ede.png';
const gatito7 = 'https://i.imgur.com/ryh89Vx.mp4';
const gatito8 = 'https://i.pinimg.com/originals/0d/cf/dc/0dcfdc28e45540f709ee305ec4ff5289.jpg';
const gatito9 = 'https://imgur.com/aifOQYw';
const gatito10 = 'https://i.pinimg.com/564x/c3/10/5c/c3105cee5f7f39fb7936993204b732fb.jpg';
const gatito11 = 'https://i.pinimg.com/564x/12/5c/77/125c77a1a879eb62cd838989dd44fc09.jpg';
const gatito12 = 'https://i.pinimg.com/564x/7f/70/1d/7f701dc3098a220e8558d4be52b888aa.jpg';
const gatito13 = 'https://i.pinimg.com/564x/20/9a/79/209a793468a7a88d4156378353784677.jpg';
const gatito14 = 'https://i.pinimg.com/564x/e6/13/74/e613743083c80752f7ab3d816c9688de.jpg';
const gatito15 = 'https://i.pinimg.com/564x/6f/8c/c4/6f8cc4c8bb07b4afcf1c7346f4100eda.jpg';


const gatitos = [gatito1, gatito2, gatito3, gatito4, gatito5, gatito6, gatito7, gatito8, gatito9, gatito10, gatito11, gatito12, gatito13, gatito14, gatito15];

//
//cumples
    // name: '',
    // day: ,
    // month: ,
    // id: '<@>'

const c0 = {
    name: 'Rapo', 
    day: 30,
    month: 4,
    id: '<@285887505868521472>'
}

const c1 = {
    name:'Kalv',
    day: 18,
    month: 0, 
    id: '<@379789480158035979>'
}

const c2 = {
    name: 'Palmon',
    day: 14,
    month: 8,
    id: '<@359501516333121557>'
}

const c3 = {
    name: 'Kia',
    day: 17,
    month: 6,
    id: '<@227838752242794496>'
}

const c4 = {
    name: 'Matt',
    day: 2,
    month: 11,
    id: '<@200950591864832000>'
}

const c5 = {
    name: 'Tivi',
    day: 27,
    month: 5,
    id: '<@337420750682062848>'
}

const c6 = {
    name: 'Gala',
    day: 27,
    month: 7,
    id: '<@483452813326680090>'
}

const c7 = {
    name: 'Tea',
    day: 29,
    month: 7,
    id: '<@330844538832683010>'
}

const c8 = {
    name: 'Gin',
    day: 14,
    month: 1,
    id: '<@172074156765085696>'
}

const cumpleañitos = [c0, c1, c2, c3, c4, c5, c6, c7, c8];

//
//raid info

const raidOne = {
    day: 'Wednesday',
    dayNum: 3,
    time: '3:00am st / 9:00pm est'
}

const raidTwo = {
    day: 'Thursday',
    dayNum: 4,
    time: '3:00am st / 9:00pm est'
}

// const coreTwoRaid = {
//     day: 'Monday',
//     dayNum: 1,
//     time: '3:00am st / 9:00pm est'
// }

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

        const random = Math.floor(Math.random()*(15 - 0)+0);
        const randomFrase = Math.floor(Math.random() * 3);

        client.channels.cache.get(anunChannelId).send(`${reminderOne[randomFrase]}`)
        client.channels.cache.get(anunChannelId).send(`${gatitos[random]}`)

    });

    raidOneAn.start()

     const raidTwoAn = new CronJob(`0 30 15 * * ${raidTwo.dayNum}`, () => {

        const random = Math.floor(Math.random()*(10 - 0)+0);
        const randomFrase = Math.floor(Math.random() * 3);

        client.channels.cache.get(anunChannelId).send(`${reminderTwo[randomFrase]}`)
        client.channels.cache.get(anunChannelId).send(`${gatitos[random]}`)

    });

    raidTwoAn.start() 

//
//cumpleaños

    cumpleañitos.map((cum) => {
        const cumReminder = new CronJob(`0 12 12 ${cum.day} ${cum.month} *`, () =>{

            client.channels.cache.get(dinosOnlyId).send(`GUYS GUYS its ${cum.id}'s birthday! dont be rude say something!!`)
            client.channels.cache.get(dinosOnlyId).send(`https://giphy.com/gifs/dancing-dinosaur-t-rex-3rgXBvnbXtxwaWmhr2`)
            })
        cumReminder.start()
    })

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
        const random = Math.floor(Math.random() * 15);
        msg.channel.send(gatitos[random]);
    }
})

