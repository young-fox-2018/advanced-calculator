'use strict'

const Calculator = require("./calculator.js")

let calculate = new Calculator('phi')

// calculate.circle(10, 10)
calculate.multiply(10).multiply(10)
console.log(calculate.result);

// execute function on calculator.js in here
