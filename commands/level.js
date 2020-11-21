const leveling = require('discord-leveling');

module.exports = {
    name: "level",
    description: "Blkehalsk",

    async run (client, message, args) {
        
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

    let output = await leveling.Fetch(user.id);

    message.channel.send(`${user} is now level ${output.level} with ${output.xp} xps`)
    }
}