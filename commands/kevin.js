exports.run = (client, message) => {
  message.channel.send('Animated Dick')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kevin',
  description: '...',
  usage: 'kevin'
};
