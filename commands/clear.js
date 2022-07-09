module.exports = {
    name: 'clear',
    description: "Clears messages",
    status: true,
    args: "[amount]",
    async execute(client, message, args){
        if(!args[0]) return message.reply("enter amount");
        if(isNaN(args[0])) return message.reply("enter a number");
        if(args[0]>100) return message.reply("cannot delete more than 100 messages at once")
        if(args[0]<1) return message.reply("cannot do that")

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}