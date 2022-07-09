module.exports = {
    name: 'spam',
    description: 'This is a spam command',
    status: true,
    args: "@user [amount]",
    execute(client, message, args){
        if(args[0] === "@here" || args[0] === "@everyone") return message.channel.send("I cannot spam that many people at once");
        const member = message.mentions.members.first();
        if(!member) return message.channel.send("please mention a member");
        for (var i = 0; i < parseInt(args[1]); i++) {
            member.send("asd");
        }
        message.react('👍')

    }
}