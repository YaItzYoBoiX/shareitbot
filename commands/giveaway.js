const ms = require('ms');

module.exports = {
    name: "giveaway",
    description: 'Starts a  giveaway request',

    async run(client, message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send('You do not have permissions to start a giveaway request!');

        let channel = message.mention.channels.first();

        if (!channel) return message.channel.send('Please define a channel arg first!');

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Please set a valid duration!');

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('You did not specify any number of winners!');

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send('Please define something specifics!')

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,
            hostedBy: client.config.hostedBy ? message.author : null,
            messages: {
                giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY",
                giveawayEned: (client.config.everyoneMention ? "@everyone\n\n" : "") + "GIVEAWAY ENDED",
                timeRemaining: "Time remaining: **{duration}**",
                inviteToParticipate: "React with 🎉 to enter",
                winMessage: "Congratulations {winners}! You have won **{prize}**",
                embedFooter: "It's time to compete!",
                noWinner: "A winner could not determined!",
                hostedBy: "Event hosted by {user}",
                winners: "Winner(s)",
                endedAt: "Ends at",
                units: {
                    seconds: "seconds",
                    minutes: "minutes",
                    hours: "hours",
                    days: "days",
                    plurals: false
                }
            }
        })

        message.channel.send(`Giveaway starting in ${channel}`);
    }
}