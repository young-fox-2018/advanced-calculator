'use strict'

const Calculator = require("./calculator.js")

let kalkulator = new Calculator()

console.log(kalkulator.setNumber(1).add(9).multiply(3).divide(2).subtract(5).getNumber()) //10
console.log(kalkulator.setNumber(64).squareRoot(2).getNumber()) // 8
console.log(kalkulator.setNumber(8).square(2).getNumber()) // 64
console.log(kalkulator.setNumber(8).square(9).squareRoot(3).getNumber()) //512
console.log(kalkulator.circleArea(4).getNumber()) //50.24

// execute function on calculator.js in here
