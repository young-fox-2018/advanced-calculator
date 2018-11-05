'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

//first number
const calculate = new Calculator(2).add(12).subtract(5).multiply(2).divide(2).square(2).squareRoot().phi()
console.log(calculate.number)