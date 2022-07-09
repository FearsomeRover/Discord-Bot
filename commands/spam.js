module.exports = {
  status: false,
  name: 'spam',
  description: 'This is a spam command',
  args: "@user [amount]",
  execute(client, message, args){
    if(args[0] === "@here" || args[0] === "@everyone") return message.channel.send("I cannot spam that many people at once");
    
    const member = message.mentions.members.first();
    console.log(member);
    if(!member) return message.channel.send("please mention a member");
    if(isNaN(parseInt(args[1]))) return message.channel.send("Please enter a number");
    if(parseInt(args[1]) > 15){message.channel.send("15-nél cappelve van te retard"); return;}
     
    for (var i = 0; i < parseInt(args[1]); i++) {
      member.send("asd");
    }
    console.log(member.user.id)
    message.delete();

  }
}
