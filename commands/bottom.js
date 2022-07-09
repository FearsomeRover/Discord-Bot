module.exports = {
  status: false,
    name: 'test',
    description: 'test',
    args: "",
    execute(client, message, args){
      const filter = (reaction, user) => {
	      return ;
      };

      const collector = message.createReactionCollector({ filter, time: 15000 });

      collector.on('collect', (reaction, user) => {
	      console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
      });

      collector.on('end', collected => {
	      console.log(`Collected ${collected.size} items`);
      });

        
        //message.react('👍')
    }
}
