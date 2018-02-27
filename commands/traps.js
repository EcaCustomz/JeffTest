exports.run = (client, message) => {
  message.channel.send('They Aren\'t gay')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'traps',
  description: 'Are they gay?',
  usage: 'traps'
};
