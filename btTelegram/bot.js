const TelegramBot = require('node-telegram-bot-api');
 
 // API Token Telegram
 const token = '496429446:AAGJlRkAiV0M8Y0cqulw4Yc38RpNGEFWqoo';

 
const bot = new TelegramBot(token, {polling: true});
 const request = require('request');
 bot.on('message', (msg) => {  
 var comand = "/start"
 if (msg.text.toString().toLowerCase().indexOf(comand) === 0) {
     bot.sendMessage(msg.chat.id, "Hola " +  msg.from.first_name + "! este bot es el parcial");   
 }
 });

bot.on('message', (msg) => {  
 var comand = "/telefono"
 if (msg.text.toString().toLowerCase().indexOf(comand) === 0) {
     bot.sendMessage(msg.chat.id, "2018-2018");   
 }
 });

bot.on('message', (msg) => {  
 var comand = "/mequieres"
 var res = new Array("Si, eres el bot de mi vida")
 if (msg.text.toString().toLowerCase().indexOf(comand) === 0) {
     bot.sendMessage(msg.chat.id, res.toString());   
 }
 });

 bot.on('message', (msg) => {
 var num2 = "algunas veces";  
 if (msg.text.toString().toLowerCase().indexOf(num2) === 0) {
     bot.sendMessage(msg.chat.id, "No te conozco " + msg.from.first_name);   
 }
 });



  // codigo editado por Oscar Grande