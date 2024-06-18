const {john, smith} = require('./names')
const sayHello = require('./utils')
require('./self-execute')

sayHello(john);
sayHello(smith);
sayHello("Zin Bhone HTut")