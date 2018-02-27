const chalk = require('chalk');
module.exports = client => {
   console.log(chalk.bgGreen.black('I\'m Online'));
   client.user.setPresence({ status: 'Dnd', game: { name: 'Sleeping! | ;' } });
};
