
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, CategoryChannel, MessageEmbed } = require("discord.js");
const { lastIndexOf } = require('ffmpeg-static');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message',async message => {


    //----------------------------------*HELP*--------------------------------------------  
    if (message.content === '!thomashelp') {
        const embed = new Discord.MessageEmbed()
          .setTitle('🚂   Itt megtalálsz minden parancsot Thomashoz   🚂')
          .setAuthor('Thomas a hősmozdony')
          .setDescription('Vannak parancsoka amelyek státus jelentők vagy még nem aktívak. \n Ezeknél egy "❌" található! \n Minden elérhető parancsnál található egy "✅" -jel ! \n'+"‎‎‎‎‎‎")
          .setColor('#33ccff')
          .setImage('https://media.port.hu/images/000/309/542.jpg')
          .setFooter('Amennyiben bugot vagy működés képtelen parancsot észlelsz kérlek vedd fel velem a kapcsolatot. \n Ezzel is segítve a fejlesztést : Csaba1999#0767 . Esetleg csekkold Thomasz állapotát a !tstatus parancsal.')
          .addFields({
            name: '✅  !thomashelp ',
            value: 'Előhozza a parancs listát.'
          }, {
            name: '✅  !oltás',
            value: 'Thomas beszól neked valamit.'
          }, {
            name: '✅  !hullámvasút @username',
            value: 'Felültetsz vele valakit Thomasra. \n Ezzel feébreszted őt álmából !'
          }, {
            name: '✅  !tsoundlist',
            value: 'Előhozza a jelenleg elérhető hangeffecteket.'
          }, {
            name: '✅  !tsound "0"',
            value: 'Thomas belép hozzátok és bejátszik egy mémet. (Az "" -nem szükséges)'
          }, {
            name: '✅  !aranyköpés',
            value: 'Thomas Random aranyköpést küld neked.'
          }, {
            name: '✅  !kifogás',
            value: 'Thomas ad neked egy random kifogást hogy kihúzd magadat a pácból.'
          }, {
            name: '✅  !tstatus',
            value: 'Ellenörzöd Thomas állapotát. Ha nem kapsz választ az azt jelenti hogy offline van.'
          }, {
            name: '❌  !addsound "YouTube Link" "Effect neve" ',
            value: 'Adj hozzá új hangeffektet a szerveredhez, amit Thomas lejátszik neked! \n(Az effekteket csak azon a szerveren lehet lejátszani amelyiken hozzá adtad. Az "" -nem szükséges. Maximális hossz 10mp)'
          }, {
            name: '❌  !votetokick @username',
            value: 'Szavazást indíthatsz valakinek a kirugására aki toxikus. \nSzabályrendszer fejlesztés alatt.'
          }, {
            name: 'Hívd meg Thomast a saját vagy egy barátod szerverére a linken keresztül.',
            value: 'Link: https://discord.com/api/oauth2/authorize?client_id=830753364466991125&permissions=261993004530&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize&scope=bot'
          })
          .setTimestamp();

        message.channel.send(embed);
      }
    //-----------------------------------*KIFOGÁS*---------------------------------------
    if (message.content === '!kifogás') {
        const kifogasok = [
            "Engem már nem érdekel az egész!",
            "Reaction timeoztam!",
            "Szerintem azt hajnalban írtam, és már fáradt voltam.",
            "Nem látok semmit, meg kell mosnom az arcom.",
            "Fent marasztottatok 2-ig, és ezért nem tudok játszani."
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
            " Dano: Pill megyek arcot mosni. \n Sőti: Minek? \n Dano: Mert le vagyok izzadva, nem látok semmit. 2020.11.29",
            " Sőti: A doboza megvan még? \n Tibi: K#!?va nagy doboza van.",
            " Csabi: Nem leanelhetsz, de cserébe glaz-t kell hoznod",
            " Tibi: A bish barbi még néz is ki valahogyan ( transz nő ) \n Tibi: A hamza alex az nem annyira ( meleg férfi ) 2020.12.07.",
            " Kéne nekem egy nem 3000ft-os asztalpad. Tibi, 2020.12.11",
            " Dani: Nekem 3060 vagy 3060 kell amit most mondtál. \n Csabi: Na hát az csak olyan 150k \n Dani: Na az jó, hogy kell leírni?",
            " Coli:Ezek copperek.Nem főzik meg",
            " Sőti: 1992-es a film \n Dani: De akkor hogy láthattam ha 2003-as vagyok?",
            " Dani: Hogy haltam meg???!! \n Dani:(Áll a termit charge mellett....)",
            " 8 giga ramot semmi nem fog elhasználni mert borzasztó sok, fölösleges ilyen sok ramot \n belerakni mert úgy se használja ki semmit max 1-2 speciális játék. - Coli tanára",
            " Tibi: Sorry kidobtak rám egy C4-et . Valamit vissza kellet dobnom.",
            " Dani: Ijj Tibi mi volt az a recoil? \n Tibi: Bocsi csak fél kézzel fogtam az egeret",
            " Peti: Attackert akarok venni, milyen attackert vegyek szerinted? Ela jó?",
            " Sőti: Ez a red silk ez kinek tetszik egyáltalán? Hát ez valami borzalom. \n Csabi: Tibinek. Hát nem láttad? Rezgett tőle a keze.",
            " Sőti: A gyerek csak ül ott azzal a bágyor képével.",
            " Csabi: Jó kis kávét hörcsölni, vagy várjál, szörcsölni.",
            " Tibi: Erről sóse lehet!",
            " Tibi: Köszi hogy felszedtél <3. \n Tibi: (Le TK-zik random lövöldözés közben.)",
            " Dani: Miért nem úszik a víz a halban?"
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
      var AktiSzerver = [];
      client.guilds.cache.forEach(guild => {
        AktiSzerver.push(guild.id); //(`${guild.name} | ${guild.id}`)
      })
        const embed = new Discord.MessageEmbed()
          .setTitle('⚙️  STÁTUSZ  ⚙️')
          .setDescription('Ha a státusz ONLINE akkor működik a bot. Ha mégis lenne funkció ami nem elérhető vedd fel velem a kapcsolatot discordon : Csaba1999#0767')
          .setColor('#33ccff')
          .addFields({
            name: 'Státusz :',
            value: 'ONLINE',
            inline:true
          }, {
            name: 'Thomas jelenleg ennyi szerveren van jelen :',
            value: AktiSzerver.length,
            inline:true
          }, {
            name: 'Verzió : ',
            value: "1.0 V \nThomas immáron készenáll a megjelenésre!\nRengeteg hiba lett javítva\nés rengeteg újítás lett hozzá adva.",
            inline:true
          })
          .setTimestamp();

        message.channel.send(embed);
        
    }
    //************************************************************************************
    //
    //  
    //---------------------------------*OLTÁS*------------------------------------------  
    if (message.content === '!oltás') {
        const oltasok = [
            "Hadjá má lógva " + message.author.username + " légyszives...",
            "Még egy ilyen és banollak!",
            message.author.username + " Te .. Te kis teeeee",
            message.author.username + " Vonatozni akarsz? felöllem mehet.",
            "Nem hiszem el hogy ennyire... áh.. ki se mondom.",
            "Egy verébnek több esze van mint neked!",
            message.author.username + " Anyukád tudja miket írogatsz ide?",
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
      const embed = new Discord.MessageEmbed()
          .setTitle('🚂   Effectek listája   🚂')
          .setAuthor('Thomas a hősmozdony')
          .setDescription('Az itt található parancsal és számokkal lejátszhato az effectet a barátaidnak.'+"‎‎‎‎‎‎")
          .setColor('#33ccff')
          .setFooter('Hiba esetén használd a (!tstatus)-parancsot vagy fordulj hozzám : Csaba1999#0767')
          .addFields({
            name: '!tsound 1',
            value: 'bruhh',
            inline:true
          }, {
            name: '!tsound 2',
            value: 'No god pleas no',
            inline:true
          }, {
            name: '!tsound 3',
            value: 'Oh shit not Good',
            inline:true
          }, {
            name: '!tsound 4',
            value: 'Why are you running',
            inline:true
          }, {
            name: '!tsound ...',
            value: 'Bővítés a jövőben',
            inline:true
          }, {
            name: '!tsound ...',
            value: 'Bővítés a jövőben',
            inline:true
          })
          .setTimestamp();

        message.channel.send(embed);
        
    }
    //************************************************************************************ 
    //
    //
    //----------------------------------SOUND EFFECT------------------------------------ 
    var effectTomb = ['Bruh Sound Effect #2.mp3',
                    'No God please no Sound effect.mp3',
                    'oh shit not Good ! sound effect no copyright..mp3',
                    'Why Are You Running - Sound Effect (HD).mp3'

    ];
    var soundfCommand = message.content;
      if (message.content.includes('!tsound'+' ')) {
        var soundIndex = message.content.slice(-1);
        if (!message.member.voice.channel) return message.reply("Ehez a parancshoz benne kell lenned egy szobában!");
          if (message.guild.me.voice.channel) return message.reply("Eggyszerre csak 1 effect");
              message.member.voice.channel.join().then(VoiceConnection => {
                VoiceConnection.play("./MP3/"+effectTomb[soundIndex-1]).on("finish", () => VoiceConnection.disconnect());
              }).catch(e => console.log(e))};
    //-************************************************************************************
    //
    //  
    //--------------------------------------HULLÁMVASÚT---------------------------------  
    var args = message.content.split(' ');
    if (args[0] === '!hullámvasút') {
        const muteduser = message.mentions.members.first();
        const defaultchannel = muteduser.voice.channel;
        if (muteduser.voice.selfMute || muteduser.voice.serverDeaf) {
          message.channel.send(args[1]+" felült a hullámvasútra!");
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
                                    }, 3000);
                                } else if(!muteduser.voice.selfMute || !muteduser.voice.serverDeaf) {
                                  setTimeout(() => {
                                    muteduser.voice.setChannel(defaultchannel);
                                    uc1.delete();
                                    uc2.delete();
                                }, 3000);
                                } else {
                                  setTimeout(() => {
                                    !muteduser.voice.setChannel(defaultchannel);
                                    uc1.delete();
                                    uc2.delete();
                                }, 3000);
                                }
                            }
                        });
                });

        } else {
          message.channel.send(message.author.username+" Csak némított emberek ülhetnek fel a vasútra!")
        }
    }


});

//----------------------------------TOKEN---------------------------------------  
//
console.log('Loading...');
client.login('');
console.log('Status : ONLINE');



/*
************************************************************************************


-------------------LOG-------------------
OFFICAL BOT! Beta V1.1.0
STATUS = READY TO START
ÁLLAPOT PRIVÁT!

VERZIÓK: 
      NODE.JS 14.+
      EREREE.JS 14.+
      DISCORD.JS 12.+
HOST
      https://billing.plox.host/clientarea.php
--------------------------------------------

TO DO:
-moderátor
-Ranghoz kötés
-errorok minimalizálása.

DONE:
-menü GUI
-random aranyköpés
-kifogás kártya
-status massege
-spam bug fix
-időzítő finom hangolása + 1 szoba + havalaki elhagyja a szervert ne tartsa meg a szobákatz
-ha valaki elhagyja a szerver a szobákat megtartja
-user left the voice channels hiba javitása
API VÁLTOZÁS SZOBÁT TÖRÖLNIE KELL  A BOTNAK


 */