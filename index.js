
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, CategoryChannel, MessageEmbed } = require("discord.js")

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', message => {


    //----------------------------------*HELP*--------------------------------------------  
    if (message.content === '!thomashelp') {
        const embed = new Discord.MessageEmbed()
          .setTitle('🚂  Itt megtalálsz minden parancsot Thomashoz  🚂')
          .setAuthor('Thomas a hősmozdony')
          .setDescription('Vannak parancsoka amelyek státus jelentők vagy még nem aktívak. \n Ezeknél egy "❌" található! \n Minden elérhető parancsnál található egy "✅" -jel ! \n'+"‎‎‎‎‎‎")
          .setColor('#33ccff')
          .setImage('https://media.port.hu/images/000/309/542.jpg')
          .setFooter('Amennyiben bugot vagy működés képtelen parancsot észlelsz kérlek vedd fel velem a kapcsolatot. \n Ezzel is segítve a fejlesztést : Csaba1999#0767 . Esetleg csekkold Thomasz állapotát a !tstatus parancsal.')
          .addFields({
            name: '✅ !thomashelp ',
            value: 'Előhozza a parancs listát.'
          }, {
            name: '✅ !oltás',
            value: 'Thomas beszól neked valamit.'
          }, {
            name: '✅ !hullámvasút @username',
            value: 'Felültetsz vele valakit Thomasra. \n Ezzel feébreszted őt álmából !'
          }, {
            name: '❌ !tsoundlist',
            value: 'Előhozza a jelenleg elérhető hangeffecteket.'
          }, {
            name: '❌ !tsound "0"',
            value: 'Thomas belép hozzátok és bejátszik egy mémet.'
          }, {
            name: '✅ !aranyköpés',
            value: 'Thomas Random aranyköpést küld neked.'
          }, {
            name: '✅ !kifogás',
            value: 'Thomas ad neked egy random kifogást hogy kihúzd magadat a pácból.'
          }, {
            name: '✅ !tstatus',
            value: 'Ellenörzöd Thomas állapotát. Ha nem kapsz választ az azt jelenti hogy offline van.'
          })
          .setTimestamp();

        message.channel.send(embed);
      }
    //-----------------------------------*KIFOGÁS*---------------------------------------
    if (message.content === '!kifogás') {
        const kifogasok = [
            "Engem már nem érdekel az egész!",
            "Dani csak pofázik, csak pofázik folyamatosan!",
            "Reaction timeoztam!",
            "Szerintem azt hajnalban írtam, és már fáradt voltam.",
            "Ajj, de ez egy gold geci !",
            "Én a diamondot lefosom, de ezek szilverek…",
            "Nem látok semmit, meg kell mosnom az arcom.",
            "Fent marasztottatok 2-ig, és ezért nem tudok játszani.",
            "De teljesen le van fagyva a kezem bazd meg."
        ];

        //KIIRATÁS
        var kifogTH = kifogasok.length;
        var kifogIndex = Math.floor(Math.random() * kifogTH);
        const embedO = new Discord.MessageEmbed()
          .setColor('#33ccff')
          .addFields({
            name: kifogasok[kifogIndex],
            value: '‎‎'
        })
        message.channel.send(embedO);
    }
    //*******************************************0*****************************************
    //
    //  
    //
    //
    if (message.content === '!aranyköpés') {
        const aranykopesek = [
            " Impactal lelő - Orange, 2020.09.29.",
            " Én most csapat ember leszek - Tibi, 2020.11.04",
            " Hogy nem lehet betalálni egy fél kilós gránáttal egy 120x120-as ablakon??? - Peki, dátum ismeretlen",
            " A breach ki van nyitva - Tibo, 2020.11.08",
            " Honnan lőttek le Tibi? \n Tibi: Jager, 50-es \n 2020.11.12",
            " Megdobálom őket mute jammerrel! Sőti: 2020.11.19.",
            " Ha rajtam múlott volna, megnéztem volna, de nem néztem meg mert nem volt kedvem. \n Rajtam múlott hogy nem néztem meg nem? De. \n Nem néztem meg mert nem volt kedvem rajtam múlott. Tibi - 2020.11.20.",
            " 5 mondatot kell írnom a piramis tornyokról Tibi, 2020.11.26.",
            " Tibi: Fuck you mothers 2020.11.29.",
            " Dano: Pill megyek arcot mosni. \n Sőti: Mi a fasznak? \n Dano: Mert le vagyok izzadva, nem látok semmit. 2020.11.29",
            " Sőti: A doboza megvan még? \n Tibi: Kurva nagy doboza van.",
            " Csabi: Nem leanelhetsz, de cserébe glaz-t kell hoznod",
            " Tibi: A bish barbi még néz is ki valahogyan ( transz nő ) \n Tibi: A hamza alex az nem annyira ( buzi ) 2020.12.07.",
            " Kéne nekem egy nem 3000ft-os asztalpad. Tibi, 2020.12.11",
            " Nolife: lehugyozom a diát is, de ezek silverek",
            " Dani: Nekem 3060 vagy 3060 kell amit most mondtál. \n Csabi: Na hát az csak olyan 150k \n Dani: Na az fasza, hogy kell leírni?",
            " Coli:Ezek copperek.Nem főzik meg",
            " Csabi: De az a legjobb bazd meg amikor a fogyatékosok szidják a fogyatékosokat bazd \n meg: höhöhö nézd már neki csak fél karja van! Neked meg nincsen lábad bazd meg. Ti, Ti  \n ketten ez a kategóra vagytok.",
            " Sőti: 1992-es a film \n Dani: De akkor hogy láthattam ha 2003-as vagyok??",
            " Dani: Hogy haltam meg???!! \n Dani:(Áll a termit charge mellett....)",
            " 8 giga ramot semmi nem fog elhasználni mert borzasztó sok, fölösleges ilyen sok ramot \n belerakni mert úgy se használja ki semmit max 1-2 speciális játék. - Coli gyökér tanára",
            " Tibi: Sorry kidobtak rám egy C4-et . Valamit vissza kellet dobnom.",
            " Dani: Ijj Tibi mi volt az a recoil? \n Tibi: Bocsi csak fél kézzel fogtam az egeret",
            " Peti: Attackert akarok venni, milyen attackert vegyek szerinted? Ela jó?",
            " Sőti: Ez a red silk ez kinek tetszik egyáltalán? Hát ez valami borzalom. \n Csabi: Tibinek. Hát nem láttad? Rezgett tőle a keze.",
            " Sőti: A gyerek csak ül ott azzal a bágyor képével.",
            " Csabi: Jó kis kávét hörcsölni, vagy várjál, szörcsölni.",
            " Tibi: Erről sóse lehet!",
            " Tibi: Köszi hogy felszedtél <3. \n Tibi: (Le TK-zik random lövöldözés közben.)",
            " Dani:Miért nem úszik a víz a halban?"
        ];

        //KIIRATÁS
        var aranyTH = aranykopesek.length;
        var aranyIndex = Math.floor(Math.random() * aranyTH);
        const embedU = new Discord.MessageEmbed()
          .setColor('#33ccff')
          .addFields({
            name: aranykopesek[aranyIndex],
            value: '‎‎'
        })
        message.channel.send(embedU);

    }
    //-------------------------------*STATUS*---------------------------------------------  
    if (message.content === '!tstatus') {
        message.channel.send("Jelenlegi státusz : ONLINE' .");
        message.channel.send("Modulok : MISSING_CODE/" + "MISSING_CODE");
        message.channel.send("REPORT : ( Ha a státusz : ONLINE akkor működik a bot. Ha mégse, vedd fel velem a kapcsolatot : Csaba1999#0767 )");
    }
    //************************************************************************************
    //
    //  
    //---------------------------------*OLTÁS*------------------------------------------  
    if (message.content === '!oltás') {
        const oltasok = ["Mi kéne te fasz?",
            "Hadjá má lógva " + message.author.username + " baszod",
            "Még egy ilyen és banollak!",
            message.author.username + " Te faszkalap....",
            message.author.username + " Vonatozni akarsz? felöllem mehet.",
            "Nem hiszem el hogy ennyire... áh.. ki se mondom.",
            "Egy verébnek több esze van mint neked!",
            message.author.username + " gyere vonatozni velünk te kis hombár homár.",
            message.author.username + " Ki ez az NBER?!",
            message.author.username + " -Szóljak anyádnak?",
            message.author.username + " Anyád már tudja hogy buzi vagy?",
            "De az nem úgy van " + message.author.username + " istenem na , kérlek"
        ];

        //KIIRATÁS
        var oltTH = oltasok.length;
        var oltIndex = Math.floor(Math.random() * oltTH);
        const embedP = new Discord.MessageEmbed()
            .setColor('#33ccff')
            .addFields({
            name: oltasok[oltIndex],
            value: '‎‎'
        })
        message.channel.send(embedP);
    }
    //************************************************************************************
    //
    //    
    //---------------------------------SOUND LIST---------------------------------------  
    if (message.content === '!tsoundlist') {
        message.channel.send(
            '//A teljes lista inaktív ! (Fejlesztés alatt)' + '\n'
            + '1 - bruhh ' + '\n'
            + '2 - oh no' + '\n'
            + '3 - no god' + '\n'
            + '4 - why are you runnin' + '\n'
            + '5 - dam boy');
    }
    //************************************************************************************ 
    //
    //
    //----------------------------------SOUND EFFECT------------------------------------  
    if (message.content === '!tsound 1') {
        message.channel.send('Fejlesztés alatt');
    }
    //-************************************************************************************
    //
    //  
    //--------------------------------------HULLÁMVASÚT---------------------------------  
    var args = message.content.split(' ');
    if (args[0] === '!hullámvasút') {
        const muteduser = message.mentions.members.first();
        const defaultchannel = muteduser.voice.channel;
        if (muteduser.voice.selfMute || muteduser.voice.serverDeaf) {
            message.guild.channels.create('SI', { type: 'voice' })
                .then(uc1 => {
                    message.guild.channels.create('HUHU', { type: 'voice' })
                        .then(uc2 => {
                            unmutefc(uc1, uc2, defaultchannel, muteduser);
                            function unmutefc(uc1, uc2, defaultchannel, muteduser) {
                                if (muteduser.voice.selfMute || muteduser.voice.serverDeaf) {
                                    muteduser.voice.setChannel(uc1);
                                    muteduser.voice.setChannel(uc2);
                                    setTimeout(() => {
                                        unmutefc(uc1, uc2, defaultchannel, muteduser);
                                    }, 3500);
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

//----------------------------------TOKEN---------------------------------------  
//
console.log('Loading...');
client.login('');
console.log('Status : ONLINE');
console.log('Modulok : MISSING_CODE/MISSING_CODE');
//************************************************************************************
//
//
//-------------------LOG-------------------
//OFFICAL BOT! V1.0.5
//STATUS = READY TO START
//ÁLLAPOT PRIVÁT!
//PUBLIC VERZÓ VÁRHATÓAN 3 - 4 HÓNAP
//
//VERZIÓK: 
//      NODE.JS 14.+
//      EREREE.JS 14.+
//      DISCORD.JS 12.+
//HOST
//      https://billing.plox.host/clientarea.php
//      pass:50/70 A többi fejben
//      https://discord.com/api/oauth2/authorize?client_id=830753364466991125&permissions=4294966704&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize&scope=bot
//--------------------------------------------
/*
TO DO:
-soud effect
-moderátor
-menü GUI
-spam bug fix
-Ranghoz kötés
-random aranyköpés
-kifogás kártya
-időzítő finom hangolása + 1 szoba
-user left the voice channels hiba javitása
-errorok minimalizálása.
-tartalom bővítés
-status massege
 */
//--------------------------------------------

