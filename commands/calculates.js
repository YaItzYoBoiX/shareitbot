const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: 'calculate',
    description: 'Calculate the integers',


    async run (client, message, args) {

        if(!args[0]) return message.channel.send('Please define the first arg!')

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please define a **valid** question.')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}
