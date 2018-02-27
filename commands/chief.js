exports.run = (client, message) => {
  message.channel.send(`He found the secret Strip club and still fucks robots`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c'],
  permLevel: 0
};

exports.help = {
  name: 'chief',
  description: 'zach',
  usage: 'chief'
};
