const { execute } = require("./ping");

module.exports = {
    name: 'help',
    description: 'Display all the commands available',

    async run(client, message, args) {
        message.channel.send('```==================================================\r\nList of General Commands\r\n==================================================\r\n1. help - Get information about commands\r\2. blueprints - Get a list of the blueprints\r\n3. share - Share your own creations\r\n4. download - Download the game\r\n5. ping - Get bot\'s latency\r\n=================================================\r\nList commands for {\'blueprints\'} (Currently under development) \r\n==================================================\r\n2.a)-get {index} - Get a blueprint of the following index (NOTE: Make sure to include the arguement\r\nExample: [bp?get 69]\r\nb)-report {index} - Report a problem of the following index (NOTE: Make sure to include the arguments)\r\nExample: [bp?report 69 Inappropriate builds]\r\n==================================================\r\nMISC Commands\r\n==================================================\r\n1.Math commands\r\n Usage: +calculate {arg1} +/x/-/(/)/^ {arg2}\r\n Example: [2+2]\r\n2.-rockets\r\n Description: Get a random image of rockets from Google.\r\n Usage: +rockets\r\n3.Meme\r\n Description:Get a random image from reddit\r\n Usage: +meme\r\n==================================================\r\nEconomy\r\n================================\r\n1.daily\r\n Description:Get a daily reward.\r\n Usage: +daily\r\n2.bal\r\n Description:Chekc your account balance\r\n Usage: +bal {arg}```')
    }
    
}