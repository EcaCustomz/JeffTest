exports.run = (client, message) => {
  message.channel.send(`https://cdn.discordapp.com/attachments/390324790990471179/417108214832824361/Screenshot_20180223-235412.jpg`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'billy',
  description: 'shows the god himself',
  usage: 'billy'
};
