const TelegramBot = require('node-telegram-bot-api');

const mongoose = require('mongoose');

const Schema = require('../server/order');
const order = require('../server/order');

const token = '5947288814:AAFysHaIBrSpNf_ZvBMG0kEymWSeFrYMU5k';

const bot = new TelegramBot(token, {polling: true});

const weburl = 'https://video-card.vercel.app/';

const tgsup = 'Username';

const db = 'mongodb+srv://root:root@cluster0.wamgula.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then((res) => console.log('OK'))
    .catch((err) => console.log(err))

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];


  bot.sendMessage(chatId, resp);
});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
    if(text === '/start') {
        await bot.sendMessage(chatId, 'Добро пожаловать ...', {
            reply_markup:{
                keyboard:[
                    [{text: 'Каталог', web_app: {url: weburl}}],
                    [{text: 'Сделать заказ'}],
                    [{text: 'Правила'}],
                    [{text: 'О нас'}]
                ]
            }
        });
        await bot.sendMessage(chatId, '... ' + tgsup)
    }

    if(text === 'Сделать заказ') {
        await bot.sendMessage(chatId, '...')
        await bot.sendMessage(chatId, '...')
    }

    if(text === 'О нас') {
        await bot.sendMessage(chatId, '...'),

        await bot.sendMessage(chatId, '... ' + tgsup)
        
    }

    if(text === 'Правила') {
        await bot.sendMessage(chatId, '1)...')
        await bot.sendMessage(chatId, '2)...')
        await bot.sendMessage(chatId, '3)..')
        await bot.sendMessage(chatId, '4)... ' + tgsup + ' ...')
    }

    if(text !== 'Сделать заказ' && text !== 'О нас' && text !== 'Правила' && text !== '/start') {
        // console.log(text)

        const db = new order({order: text})
        db.save()

        console.log(db)

    }
    
});
