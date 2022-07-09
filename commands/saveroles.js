module.exports = {
    name: 'saveroles',
    description: 'Lists the roles of a member (not yet able of saving)',
    status: false,
    args: "",
    execute(client, message, args){
        let member = message.mentions.members.first();
        member.roles.add(role)

        
        message.react('👍')
    }
}