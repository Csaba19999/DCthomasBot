const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!thomashelp') {
		message.channel.send('Jelenleg elérhető parancsok'+'\n'+'\n'
                        +'          - !thomashelp = Segítség kérés'+'\n'
                        +'    - !thomasoltás = Thomas beszól neked valamit.'+'\n'
                        +'- !hullámvasút @username = Felültetsz vele valakit a vasútra.');
	}
        if (message.content === '!thomasoltás') {
		message.channel.send('Mi kéne te fasz?');
	}
        if (message.content === '!hullámvasút') {
		message.channel.send('Jelenleg fejlesztés alatt áll. Térj vissza később!');
	}
});

client.login('ODMwNzUzMzY0NDY2OTkxMTI1.YHLRXA.2ccvZSQBuVvAWXx0-EWtK4AB-Xg');