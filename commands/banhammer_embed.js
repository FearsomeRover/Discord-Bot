const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
    status: false,
    name: 'banhammer_embed',
    description: 'sends the custom embed',
    args: "",
    execute(client, message, args){
      const list = client.guilds.cache.get("993488202788778005");
      
      memberlist = []
      for(let member of list.members.cache){
        let m = {label: member.username, description: "nothing", value: member.id};
        memberlist.push(m)
      }
      const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
            memberlist]),
			);
      message.channel.send({ content: 'Selecion menu:', components: [row] }).awaitMessageComponent({ filter, componentType: 'SELECT_MENU', time: 60000 })
	.then(interaction => interaction.editReply(`You selected ${interaction.values.join(', ')}!`))
	.catch(err => console.log(`No interactions were collected.`));

        
        message.react('👍')
    }
}
