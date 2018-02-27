exports.run = (client, message, member, id, user, username) => {
  message.channel.send('``14) NO DABBING YOU FUCKING FAGGOTS (will be punished by rape)``')
    .then(msg => {
     message.channel.send(`${client.user} raped *${message.author}*!`)
    .then(msg => {
      msg.channel.send('http://i0.kym-cdn.com/photos/images/original/001/021/933/e5a.gif');
    });
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dab',
  description: 'dead meme',
  usage: 'dab'  
};
