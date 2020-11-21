const leveling = require('discord-leveling');

module.exports = {
    name: "addxp",
    decription: "Bleh",

    async run (client, message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send('You don\'t have permissions to use this command!');

        let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

        leveling.AddXp(message.author.id, 100);
        message.channel.send(`Successfully added XP to ${user}`)
    }
}