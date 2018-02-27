exports.run = (client, message, member, id, user, username) => {
  message.channel.send(`${message.author} slapped *${message.mentions.members.first()}*`)
    .then(msg => {
      msg.channel.send('https://media.giphy.com/media/l2SpSQLpViJk9vhmg/giphy.gif');
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['slp'],
  permLevel: 0
};

exports.help = {
  name: 'slap',
  description: 'self explanitory',
  usage: 'slap'
};
