const Discord = require('discord.js');

const fs = require('fs')

const client = new Discord.Client();

const prefix = '';

client.on('ready', () => {


 
 console.log(`Logged in as [ Pharaohs]`);

});











const adminprefix = "!";
const devs = ['466237189244715008'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk")
    message.channel.sendMessage(`**:white_check_mark: تم تغير الحالة الي   : ${argresult}**`)
}
});






client.on('guildMemberAdd', member => {
const YossiF = member.guild.channels.get("501827332592631814");//ايدي الشات
if(!YossiF) return;
if(YossiF) {
YossiF.send(`** Welcome To 4FUN Server :dizzy:**`);          
}
});








         client.on('message', message => {
            if (message.content === 'بس يواد') {
              message.channel.send('كيك');


            }
});







client.login(process.env.BOT_TOKEN);
