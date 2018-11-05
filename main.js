'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let result = new Calculator(2).add(3).subtract(1).multiply(2).divide(2).square(3).squareRoot().circle()

console.log(result.getResult())
