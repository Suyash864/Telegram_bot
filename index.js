const axios = require('axios');
const { Telegraf } = require('telegraf');
const { bubbleSortCode, quickSortCode, insertionSortCode, mergeSortCode, heapSortCode} = require('./Sorting_algorithm'); // Importing algorithms

/**
 * How to get the secret token for creating a bot?
 * -> Open the Telegram and search for BotFather
 * -> To read instruction type /start and press enter
 * -> To create a new bot type /newbot and press enter
 * -> It will ask for a bot name, give a bot name without a / , ex: coding_bot 
 * -> Then it will for a username ending with bot, ex: code_example_js_bot
 * -> Then it will provde a link for your bot to access
 * //t.me/coding_suyash_bot
 * -> and in last it will give you the token 
 */


const bot = new Telegraf('7654267519:AAGXRKZzAHZqgEhoGhfKFFwVTTDOsJOrooU');

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from Suyash'));
bot.command('whomadethis', (ctx) => ctx.reply('Suyash Jain'));
bot.on('sticker', (ctx) => ctx.reply('😎'));

// fetching sorting algorithm from the another file
bot.command('bubblesort', (ctx) => ctx.reply(bubbleSortCode));
bot.command('quicksort',(ctx) => ctx.reply(quickSortCode));
bot.command('insertionsort',(ctx) => ctx.reply(insertionSortCode));
bot.command('mergesort',(ctx) => ctx.reply(mergeSortCode));
bot.command('heapsort',(ctx) => ctx.reply(heapSortCode));

// fetching binarysearch algorithm from the online source(GitHub) 
bot.command('binarysearch', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/anupam-kumar-krishnan/Competitive_Programming/refs/heads/main/All%20Algorithms/Searching%20Algorithm/binary_search.cpp')
    console.log(response.data);
    return ctx.reply(response.data);
});

bot.command('linearsearch', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/anupam-kumar-krishnan/Competitive_Programming/refs/heads/main/All%20Algorithms/Searching%20Algorithm/linear_search.cpp');
    return ctx.reply(response.data);
});


bot.launch();