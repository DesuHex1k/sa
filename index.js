const TelegramBot = require('node-telegram-bot-api');

const token = '5443133311:AAFITUw2t1zDLAS2M4jlPrFVUnJU3dalihU';

const bot = new TelegramBot(token, {polling: true});

const weburl = 'https://numerous-decontamin.000webhostapp.com/';

const tgsup = '@Desu_Sasha';

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];


  bot.sendMessage(chatId, resp);
});


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
    if(text === '/start') {
        await bot.sendMessage(chatId, 'Добро пожаловать в магазин Elf Bar в Украине', {
            reply_markup:{
                keyboard:[
                    [{text: 'Каталог', web_app: {url: weburl}}],
                    [{text: 'Сделать заказ'}],
                    [{text: 'Правила'}],
                    [{text: 'О нас'}]
                ]
            }
        });
        await bot.sendMessage(chatId, 'Eсли есть вопросы то всё сюда ' + tgsup)
    }

    if(text === 'Сделать заказ') {
        await bot.sendMessage(chatId, 'Для заказа введите: Имя товара, Вкус, Количество, Имя, Фамилию, Номер телефона, Адрес доставки(Город, отделение почты, почтовый индекс)')
        await bot.sendMessage(chatId, 'После того как вы ведёте данные, мы напишем вам для подтверждения заказа, дальше отправим поставщику ордер на заказ и он отправит вам его наложеным платежем. Всё просто и честно)')
    }

    if(text === 'О нас') {
        await bot.sendMessage(chatId, 'Мы магазинчик по продаже эльф баров. Мы являемся посредниками между поставщиком и клиентом(то есть вами). '),

        await bot.sendMessage(chatId, 'Наша главная цель это как можно удобнее для вас сделать покупку товаров в интернете. Поэтому если есть вопросы или идеи, то пишите на ' + tgsup)
        
    }

    if(text === 'Правила') {
        await bot.sendMessage(chatId, '1) Не спамить в чат и вести себя достойно. Мы всё видим)')
        await bot.sendMessage(chatId, '2) Не пытаться положить сервер. Я понимаю что это звучало как вызов, но честно не стоит')
        await bot.sendMessage(chatId, '3) Получать удовольствие и приятный опыт заказывая у нас))')
        await bot.sendMessage(chatId, '4) Если с товаром что-то не так, то все ругательство пишите сюда ' + tgsup + ' И мы срадостью передадим их поставщику)')
    }

    if(text !== 'Сделать заказ' && text !== 'О нас' && text !== 'Правила' && text !== '/start') {
        console.log(text)
    }
    
});
