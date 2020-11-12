const cheerio = require('cheerio');

const request = require('request');

const Discord = require('discord.js')

module.exports = {
    name: 'rockets',
    description: 'Get a random image of the rockets from Google.',

    async run(client, message, args) {
        image(message);

    }
}
function image(message){

    var options = {
        url: "https://results.dogpile.com/serp?qc=images&q=" + "Rockets",
        method: 'GET',
        headers: {
            "Accept": "text/html",
            'User-Agent': 'Edge'
        }
    };

    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });
}