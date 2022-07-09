const { MessageEmbed, MessageAttachment} = require('discord.js');


const file = new MessageAttachment('./content/uwu_crop.png');

module.exports = {
  status: true,
    name: 'ty',
    description: 'Thank you daddy, works if you type "good bot"',
  args: "",
    execute(client, message){
      const exampleEmbed = new MessageEmbed()
	    .setColor('#FF6187')
	    .setTitle('Thank you daddy')
                
	    .setImage('attachment://uwu_crop.png')
        
        message.channel.send({ embeds: [exampleEmbed] , files:[file]});

    }
}
