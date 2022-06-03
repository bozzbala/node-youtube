const os = require('os')

console.log('System version: ', os.version())
console.log('System: ', os.platform())
console.log('Cpu: ', os.cpus())
console.log('Architecture: ', os.arch())
console.log('Free memory: ', os.freemem())
console.log('Total memory: ', os.totalmem())
console.log('Home dir: ', os.homedir())
console.log('UPTIME: ', os.uptime())