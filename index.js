const FSM = require (`${__dirname}/fsm.js`)

const fsm = new FSM (__dirname + "/app")

fsm.search ('name', 'app')

console.dir (fsm, {depth: 20})