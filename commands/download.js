const { execute } = require("./ping");

const Discord = require('discord.js');

module.exports = {
    name: 'download',
    description: 'Get link of the game',

    async run (client, message, args) {
        message.channel.send('__**Link of the game**__\r\nAndroid: *https://play.google.com/store/apps/details?id=com.StefMorojna.SpaceflightSimulator&hl=en_US&gl=US*\r\nIOS: *https://apps.apple.com/us/app/spaceflight-simulator/id1308057272*');
    }
}
