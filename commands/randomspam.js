module.exports = {
  status: true,
  name: 'randomspam',
  description: 'This is a random spam command',
  args: "",
  execute(client, message, args){
    for (var i = 0; i < 10; i++) {
      message.channel.send('asd');
    }
            
  }
}
