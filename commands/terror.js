exports.run = (client, message) => {
  message.channel.send('Terror is the beginning of chaos')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'terror',
  description: 'Terror is the beginning of chaos',
  usage: 'terror'
};
