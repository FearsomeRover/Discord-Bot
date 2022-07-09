module.exports = {
    name: 'banhammer',
    description: 'Only usable on your birthday, and has to be authenticated by the server owner',
    status: false,
    args: "",
    execute(client, message, args){
        if (message.author == client.user) return
        let role = message.guild.roles.cache.find(role => role.name === "BANHAMMER");
        console.log(role)
        let member = message.author;
        member.roles.add(role);
        message.react('👍')

    }
}