'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
const calculator = new Calculator(10)
// console.log(calculator.add(5).subtract(6)) //9
// console.log(calculator.add(5).subtract(6).square(2).result()) // 81
// console.log(calculator.squareRoot()) // 3.16
console.log(calculator.circleArea().result()) //31.428...