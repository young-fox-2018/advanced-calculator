'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let count = new Calculator(0)
console.log(count.add(10).multiply(3))