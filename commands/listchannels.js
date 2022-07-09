module.exports = {
    name: 'listchannels',
    description: '',
    status: false,
    args: "",
    execute(client, message, args){
        for(chanel of client.channels)
            console.log(chanel)

        
        message.react('👍')
    }
}