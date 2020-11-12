const RandomPuppy = require('random-puppy');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'meme',
    description: 'Generates a random meme',
    async run (client, message, args) {
        const subReddits = ["dankmemer", "memes", "funny"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")   
        .setImage(img)
        .setTitle(`Generated from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed);
    }
}