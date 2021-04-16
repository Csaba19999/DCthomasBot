module.exports = {
    name: 'command',
    description: "Embeds",
    execute(message, args ,Discord){
        const newEmbed = new Discord.messageEmbed()
        .setColor('#59C7F6')
        .setTitle('Parancsok Thomashoz a gőzöshöz')
        .setDescription('Leírás az embedhez')
        .addFields(
            {name: 'roule1' , value: 'Be nice'},
            {name: 'roule2' , value: 'Be nic'},
            {name: 'roule3' , value: 'Be ne'},
        )
        .setImage('https://static.wikia.nocookie.net/thomas/images/b/be/ThomasCGI.jpg/revision/latest/scale-to-width-down/640?cb=20120122114938&path-prefix=hu')
        .setFooter('utó szó');
        
        message.channel.send(newEmbed)
    }
}




