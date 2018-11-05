'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculate = new Calculator(3)

// console.log(calculate.add(2).multiply(2).subtract(2).divide(2).square(2))
console.log(calculate.add(2).multiply(calculate.pi()))
