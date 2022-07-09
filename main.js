const { clientId, guildId, token } = require('./config.json');

const { Client, Collection, Intents, MessageAttachment} = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');
const { clientId, guildId, token } = require('./config.json');


const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "GUILD_VOICE_STATES"] })

const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

prefix = "-r "
var connection;
console.log(parseInt("a"));

console.log(isNaN(parseInt("a")));


client.once('ready', () => {
    console.log('spammer is online');
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;

    if (message.channel.type === 'DM') {
        console.log(message.content)
    }

});

// client.on("voiceStateUpdate", (oldVoiceState, newVoiceState) => { 
//     console.log("vsu")// Listeing to the voiceStateUpdate event
//     if (newVoiceState.channel) { // The member connected to a channel.
//         console.log(`${newVoiceState.member.user.tag} connected to ${newVoiceState.channel.name}.`);
//     } else if (oldVoiceState.channel) { // The member disconnected from a channel.
//         console.log(`${oldVoiceState.member.user.tag} disconnected from ${oldVoiceState.channel.name}.`)
//     };
// });
client.on('message', message =>{
    if(message.content.toLowerCase() === "good bot") {
        message.channel.send("Thank you, Daddy!");
        return;
      }
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(client, message, args);
        //client.users.get('290148310843523082').send("asd");
        
    }
    else if (command === 'clear'){
        client.commands.get('clear').execute(client, message, args);
    }
    else if (command === 'spam'){
        client.commands.get('spam').execute(client, message, args);
    }
    else if (command === 'bring'){
        client.commands.get('bring').execute(client, message, args);
    }
    else if (command === 'banhammer'){
        client.commands.get('banhammer').execute(client, message, args);
    }
    else if (command === 'saveroles'){
        client.commands.get('saveroles').execute(client, message, args);
    }
    else if (command === 'listchannels'){
        const attachment = new MessageAttachment('./bottom.png');
        message.channel.send({files:['./bottom.png']});
    }
    else if (command === 'ty'){
        client.commands.get('ty').execute(client, message, args);
    }
    else if (command === 'test'){
        client.commands.get('test').execute(client, message, args);
    }
    else if (command === 'voice'){
        if(message.member.voice.channel === null) message.channel.send('you are not in a voice channel i can see');
        else{
            connection = joinVoiceChannel({
                channelId: message.member.voice.channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            });
        }
        
    }
    else if (command === 'dc'){
        if(connection === undefined) message.channel.send('im not connected anywhere at the moment')
        
        else if (connection._state.status === "ready" || connection._state.status === "signalling" || connection._state.status === "connecting"){
          connection.destroy();
          message.react('👍');
        }
        else{
          message.channel.send('im not connected anywhere at the moment')
        }
        
    }
    else if (command === 'help') {
        for(const comm of client.commands){
          if(comm[1].status){
            if(comm[1].args === ""){
                message.channel.send(comm[1].name + '\t \t description: ' + comm[1].description);
            }else{
                message.channel.send(comm[1].name + '\t \t description: ' + comm[1].description + '\t \t arguments: ' + comm[1].args);
            }
            
          }
          
        }
    }
    else{
        messageCreate()
    }

});


client.login(token);