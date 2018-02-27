exports.run = (client, message) => {
message.channel.send(`Kick her!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pika',
  description: 'who?',
  usage: 'pika'
};
