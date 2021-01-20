var chalk = require('chalk');
module.exports = msg =>{
if(!msg) throw Error('Message Not Found')
process.on('exit',() => console.log(chalk.yellowBright(msg)))
}