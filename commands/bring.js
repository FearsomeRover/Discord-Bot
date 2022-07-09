module.exports = {
    name: 'bring',
    description: 'Brings mentioned member to current voice channel',
    status: true,
    args: "@user",
    execute(client, message, args){
        if(message.member.voice.channel === null) return message.channel.send('you are not in a voice channel i can see');
        const member = message.mentions.members.first();
        if(!member) return message.channel.send("please mention a member");
        if(!member.voice.channel)
            return message.channel.send("the member is not in a voice channel");
        member.voice.setChannel(message.member.voice.channel);
        message.delete();
    }
}