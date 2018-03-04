const CONFIG = require('./config.js');
const Api = require('node-telegram-bot-api');
const bot = new Api(CONFIG.token, CONFIG.options);
const debug = require('./helpers.js');
const fs = require('fs');


bot.onText(/\/pay/, msg => {
	const chatID = msg.chat.id;

	bot.sendInvoice(
		chatID,
		'BMX X6 M',
		'Best car',
		'payload',
		CONFIG.yaToken,
		'SOME_RANDOM_STRING_KEY',
		'RUB',
		[
			{
				label: 'bmx_x6m',
				amount: 30000
			}
		],
		{
			photo_url: 'https://www.tuningblog.eu/wp-content/uploads/2017/12/3D-Design-AC-Schnitzer-Parts-BMW-X6M-F86-SAV-20.jpg',
			photo_width: 901,
			photo_height: 600,
			need_name: false,
			need_phone_number: true,
			need_email: false,
			need_shipping_address: false,
			is_flexible: false, //цена товара неизмена независим от способа доставки
		}
	);
});