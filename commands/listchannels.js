module.exports = {
  status: false,
  name: 'listchannels',
  description: '',
  args: "",
  execute(client, message, args){
    let channels = client.guilds.channels;
    console.log(channels.first)
    for (const channel of channels.values()) 
    {
    message.channel.send(channel.name);
    }
       
  message.react('👍')
  }
}
