// const { OpusEncoder } = require('@discordjs/opus');
// const encoder = new OpusEncoder(48000, 2);
// const encoded = encoder.encode(buffer);
// const decoded = encoder.decode(encoded);
const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: 'test',
    description: 'test',
    status: false,
    args: "",
    execute(client, message, args){
        if(message.member.voice.channel === null) return message.channel.send('you are not in a voice channel i can see');
        const member = message.mentions.members.first();
        if(!member) return message.channel.send("please mention a member");
        if(!member.voice.channel)
            return message.channel.send("the member is not in a voice channel");
        member.voice.setChannel(message.member.voice.channel);
        message.react('👍')
    }
}