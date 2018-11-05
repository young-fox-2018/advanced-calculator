'use strict'

const Calculator = require("./calculator.js")
var calculate = new Calculator()
calculate.circle().add(2).square(4)
console.log(calculate.result)
// execute function on calculator.js in here
