module.exports = {
    name: 'ping',
    description: 'This is a ping command',
    args: "",
    status: true,
    execute(client, message, args){
        message.channel.send('pong!');
        message.react('👍')
    }
}