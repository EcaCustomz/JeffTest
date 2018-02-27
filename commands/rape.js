exports.run = (client, message, member, id, user, username) => {
  message.channel.send(`${message.author} raped *${message.mentions.members.first()}*!`)
    .then(msg => {
      msg.channel.send('http://i0.kym-cdn.com/photos/images/original/001/021/933/e5a.gif');
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rape',
  description: '*blows whistle*',
  usage: 'rape'
};
