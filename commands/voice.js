const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
  name: 'voice',
  description: 'Joins your currnet voice channel',
  status: true,
  args: "@user",
  execute(client, message, args){
    if(message.member.voice.channel === null) return message.channel.send('you are not in a voice channel i can see');
    const connection = joinVoiceChannel({
	    channelId: message.member.voice.channel.id,
	    guildId: message.guild.id,
	    adapterCreator: message.guild.voiceAdapterCreator,
    });


        
    message.react('👍')
  }
}
