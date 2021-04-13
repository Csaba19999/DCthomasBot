const {Client, Intents} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const guild = client.guilds.cache.get(331376399950544898);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

});
client.on('message', async message => {

    //bot menü
    if (message.content === '!thomashelp') {
        message.channel.send(
                'Jelenleg elérhető parancsok' + '\n' + '\n'
                + '- !thomashelp = Segítség kérés' + '\n'
                + '- !thomasoltás = Thomas beszól neked valamit.' + '\n'
                + '- !hullámvasút @username = Felültetsz vele valakit a Thomasra.' + '\n'
                + '- !tsound "effect_száma" = Lejátszasz egy hang effectet! effectek listájához írd be a "!tsoundlist"-parancsot!');
    }
    // Inaktív
    if (message.content === '!thomasoltás') {
        const oltasok = ["Mi kéne te fasz?",
            "Hadjá má lógva " + message.author.username + " baszod",
            "Még egy ilyen és banollak!",
            message.author.username + " Te faszkalap....",
            message.author.username + " Vonatozni akarsz? felöllem mehet.",
            "Nem hiszem el hogy ennyire... áh.. ki se mondom.",
            "Egy verébnek több esze van mint neked!",
            message.author.username + " gyere vonatozni velünk te kis hombár homár.",
            message.author.username + " Ki ez az ENBER?!",
            message.author.username + " -Szóljak anyádnak?",
            message.author.username + " Anyád már tudja hogy buzi vagy?"];
        var oltR = Math.floor(Math.random() * 11);
        message.channel.send(oltasok[oltR] + "");
    }
    // sound effect menü (inaktív)
    if (message.content === '!tsoundlist') {
        message.channel.send('1 - bruhh ' + '\n'
                + '2 - oh no' + '\n'
                + '3 - no god' + '\n'
                + '4 - why are you runnin' + '\n'
                + '5 - dam boy');
    }
    //effect lejátszása (inaktí)
    if (message.content === '!tsound 1') {
        message.channel.send('Fejlesztés alatt');
    }
    // emberek mozgatása !hullámvasút @username
    var args = message.content.split(' ');
    if (args[0] == '!hullámvasút') {
        const muteduser = message.mentions.members.first();
        const defaultchannel = muteduser.voice.channel;
        if (muteduser.voice.selfMute || muteduser.voice.serverDeaf) {
            message.guild.channels.create('SI', {type: 'voice'})
                    .then(uc1 => {
                        message.guild.channels.create('HUHU', {type: 'voice'})
                                .then(uc2 => {
                                    unmutefc(uc1, uc2, defaultchannel, muteduser);
                                    function unmutefc(uc1, uc2, defaultchannel, muteduser) {
                                        if (muteduser.voice.selfMute || muteduser.voice.serverDeaf) {
                                            muteduser.voice.setChannel(uc1);
                                            muteduser.voice.setChannel(uc2);
                                            setTimeout(() => {
                                                unmutefc(uc1, uc2, defaultchannel, muteduser);
                                            }, 3000);
                                        } else {
                                            muteduser.voice.setChannel(defaultchannel);
                                            uc1.delete();
                                            uc2.delete();
                                        }
                                    }
                                });
                    });


        }
    }
});




var token1 = "ODMwNzUzMzY0NDY2OTkxMTI1";
var token2 = ".YHLRXA.uW9HxaFqJ0GC-";
var token3 = "exAfzPAW-fWz5Y";
client.login(token1 + token2 + token3);
