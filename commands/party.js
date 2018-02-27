exports.run = (client, message) => {
message.channel.send(`https://www.youtube.com/watch?v=6Zbi0XmGtMw`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'party',
  description: 'We like it',
  usage: 'party'
};