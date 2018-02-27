exports.run = (client, message) => {
message.channel.send(`https://www.patreon.com/user?u=7004031`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'patreon',
  description: 'Gives the patreon link to help support the programmer',
  usage: 'patreon'
};
