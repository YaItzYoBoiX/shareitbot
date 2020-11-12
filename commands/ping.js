const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: "Get a bot latency",

    async run(client, message, args) {

        message.channel.send('Getting it ready...').then(msg => {
            const ping = msg.createdTimestamp - message.createdTimestamp;
            msg.edit('Bot latency is ' + ping + 'ms');
        })
    }
}