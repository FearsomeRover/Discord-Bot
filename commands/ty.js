const { MessageEmbed, MessageAttachment} = require('discord.js');


const file = new MessageAttachment('uwu.png');

module.exports = {
    name: 'ty',
    description: 'Thank you daddy',
    status: false,
    args: "",
    execute(client, message, args){
        const exampleEmbed = new MessageEmbed()
	    .setColor('#ffffff')
	    .setTitle('Thank you daddy')
	    .setImage('attachment://uwu.png')

        message.channel.send({ embeds: [exampleEmbed] , files:[file]});
    }
}