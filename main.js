'use strict'

const Calculator = require("./calculator.js")

let calculate = new Calculator(2)

// calculate.circle(10, 10)
calculate.multiply(5).circle()
console.log(calculate.result);

// execute function on calculator.js in here
