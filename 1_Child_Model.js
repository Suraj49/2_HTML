//chlid process module is node module which is used to create sub process inside

const cp = require('child_process')

console.log('trying to open calculator with child process')

cp.execSync('calc')

console.log('calculator opened')


console.log('trying to open vs Code with child process')

cp.execSync('code')

console.log('Vs code opened')

