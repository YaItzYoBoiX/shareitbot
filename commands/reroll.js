const ms = require('ms')

module.exports = {
    name: 'reroll',
    description: 'Rerolls giveaway ',

    async run (client, message, args) {
        
        if(!message.member.hasPermmission("MANAGE_MESSAGE")) return message.channel.send('You do not have permissions to start a giveaway request!');

        if(!args[0]) return message.channel.send('Please provide giveaway ID');

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('Sorry! We could\'t find the specified giveaway ID!')

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled succeed!')
        })
        .catch((e) => {
            if(e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)){
                message.channel.send('This giveaway hasn\'t ended yet')
            } else {
                console.error(e);
                message.channel.send('Error')
            }
        })
    }
}