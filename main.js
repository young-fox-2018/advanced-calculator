'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const calculate = new Calculator(1)
calculate.circle().add(2).multiply(1)
console.log(calculate.result)
