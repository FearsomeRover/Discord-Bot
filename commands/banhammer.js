module.exports = {
  status: false,
    name: 'banhammer',
    description: 'Only usable on your birthday, and has to be authenticated by the server owner',
    args: "",
    async execute(client, message, args){
        // if (message.author == client.user) return
        // let role = message.guild.roles.cache.find(role => role.name === "BANHAMMER");
        // console.log(role)
        // let member = message.author;
        // member.roles.add(role);
        // message.react('👍')
      // const list = client.guilds.cache.get(message.guildid);
      // list.members.fetch.forEach(member => console.log(member.user.username)); 
      memberslist=[]
      message.guild.chanels.fetch().then(console.log);
      //message.guild.members.fetch().then(console.log())
      
      // for (member of alist){
      //   //console.log(member.user.username)
      //   console.log(member.key)
      //   let m = {label: member.username, description: "nothing", value: member.id};
      //   memberlist.push(m)
      // }
      //console.log(alist)
      console.log("done")
      
    }
}
