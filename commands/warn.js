exports.run = (client, message) => {
message.channel.send(`?warn ${message.author} test`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'true',
  usage: 'warn'
};