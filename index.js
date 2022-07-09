//server setup
const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path')//Include the Path module


//Set up the Express router
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html/index.html'));
});
app.use('/', router);

//Navigate your website
//if they go to '/lol'

//404 Error
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/index.html/404.html');
});


//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});
//server setup over

const { Client, Collection, Intents, MessageAttachment } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MESSAGE_TYPING", "GUILD_VOICE_STATES"] })
const fs = require('fs');

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

//console.log(commandFiles)
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  
  client.commands.set(command.name, command);
}


prefix = "-r ";
var connection;

client.once('ready', () => {
  console.log('spammer is online');
});

client.on('message', message => {
  if(message.content.toLowerCase() === "good bot") {
    client.commands.get('ty').execute(client, message);
    return;
  }
    
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(client, message, args);
    //client.users.get('290148310843523082').send("asd");

  }
  else if (command === 'clear') {
    client.commands.get('clear').execute(client, message, args);
  }
  else if (command === 'randomspam') {
    client.commands.get('randomspam').execute(client, message, args);
  }
  else if (command === 'spam') {
    client.commands.get('spam').execute(client, message, args);
  }
  else if (command === 'banhammer') {
    client.commands.get('banhammer').execute(client, message, args);
  }
  else if (command === 'saveroles') {
    client.commands.get('saveroles').execute(client, message, args);
  }
  else if (command === 'listchannels') {
    client.commands.get('listchannels').execute(client, message, args);
  }
  else if (command === 'banhammer_embed') {
    client.commands.get('banhammer_embed').execute(client, message, args);
  }
  else if (command === 'test') {
    client.commands.get('test').execute(client, message, args);
  }
  else if (command === 'bring') {
    client.commands.get('bring').execute(client, message, args);
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
    message.channel.send("Unknown command, type " + prefix + " help for the list of commands")
  }

});


client.login('OTkyNDU2MzY4NzY4NDI2MDc1.GFVEUz.YpRR7TkyzpNL3LP7DnR4dxjaPPtEaG2pQbOkhk');
