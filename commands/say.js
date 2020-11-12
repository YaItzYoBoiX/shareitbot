module.exports = {
    name: "say",
    description: "Make a bot say whatever",

    async run (client, message, args) {
        let msg;
        let textChannel = message.mentions.channels.first()
        if(!args[0]) return message.channel.send('Please define the args first!');

        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}