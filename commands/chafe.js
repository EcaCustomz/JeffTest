exports.run = (client, message) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  const chafer = client.emojis.find("name", "chafer");
  const chafe = client.emojis.find("name", "chafe");
  const chafeincog = client.emojis.find("name", "chafeincog");
  const chaferape = client.emojis.find("name", "chaferape");
  message.channel.send('Diddles kiddles while playing the fiddle!')
    .then(msg => {
      msg.react(chafer);
      msg.react(chafe);
      msg.react(chafeincog);
      msg.react(chaferape);
  });

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['chafed'],
  permLevel: 0
};

exports.help = {
  name: 'chafe',
  description: 'get chafed!',
  usage: 'chafe'
};
