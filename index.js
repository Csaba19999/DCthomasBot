const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const guild = client.guilds.cache.get(331376399950544898);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
    if (msg.content === '!thomashelp') {
        msg.channel.send(
                'Jelenleg elérhető parancsok' + '\n' + '\n'
                + '- !thomashelp = Segítség kérés' + '\n'
                + '- !thomasoltás = Thomas beszól neked valamit.' + '\n'
                + '- !hullámvasút @username = Felültetsz vele valakit a Thomasra.'+'\n'
                + '- !tsound "effect_száma" = Lejátszasz egy hang effectet! effectek listájához írd be a "!tsoundlist"-parancsot!');
    }
    else if (msg.content === '!thomasoltás') {
        msg.channel.send('Mi kéne te fasz?');
    }
    else if (msg.content === '!tsoundlist') {
        msg.channel.send('1 - bruhh '+'\n'
                            +'2 - oh no'+'\n'
                            +'3 - no god'+'\n'
                            +'4 - why are you runnin'+'\n'
                            +'5 - dam boy');
    }
    else if (msg.content === '!tsound 1') {
        msg.channel.send('Fejlesztés alatt');
    }
    else if (msg.content.includes("!hullámvasút")) {
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`Thomas elvitte : ${taggedUser} egy körre.`);
        taggedUser.voice.setChannel(`${830749958856114187}`);
    }
    

});

client.login('ODMwNzUzMzY0NDY2OTkxMTI1.YHLRXA.8CDV0SaSGKH-vjiLWR-mj4ThZbQ');