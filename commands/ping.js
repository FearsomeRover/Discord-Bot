module.exports = {
  status: true,
  name: 'ping',
  description: 'This is a ping command',
  args: "",
  execute(client, message, args){
      message.channel.send('pong!');
      message.react('👍')
  }
}
