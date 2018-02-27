exports.run = (client, message) => {
  message.channel.send('https://cdn.discordapp.com/attachments/416871823280439306/417451123411124235/tem.jpg')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['temmie'],
  permLevel: 0
};

exports.help = {
  name: 'tem',
  description: 'It\'s temmie :D',
  usage: 'tem'
};
