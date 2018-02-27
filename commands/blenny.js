exports.run = (client, message) => {
  message.channel.send(`**( ͡° ͜ʖ ͡°)**`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'blenny',
  description: '**( ͡° ͜ʖ ͡°)**',
  usage: 'blenny'  
};
