
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();


   

client.on('ready', () => {
    //client.channels.cache.get(`630995793670701065`).send(`Ready...`)
    console.log(`Logged in as ${client.user.tag}!`);
    //	client.channels.cache.get(`630995793670701065`).send(`Logged in as ${client.user.tag}!`)
    client.user.setActivity(`.gg/chillvibe`);
    client.user.setStatus('discord.gg/chillvibe')
});


client.on('message', message => {
    if (message.content === '<@792736368476291132>') {
        message.channel.send('!d bump');
    }
});
client.on("message", message => {

    if (message.mentions.has(client.user.id)) {
        message.channel.send("!d bump");
    };
});

client.login(process.env.TOKEN);
