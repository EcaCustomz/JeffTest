exports.run = (client, message) => {
message.channel.send(`https://i.imgur.com/PijcGEU.gif`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'triggered',
  description: 'Insert meme here',
  usage: 'triggered'
};
