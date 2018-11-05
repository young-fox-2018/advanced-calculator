'use strict'

const Calculator = require("./calculator.js")
let first_number = new Calculator(9)
// first_number.add(3)
// first_number.subtract(5);
// first_number.divide(3)
// first_number.square(2)
// first_number.squareRoot()
first_number.multiply(2).divide(2).square(2).add(9).multiply(first_number.pi())
console.log("Result : " + first_number.first_number);

