'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const calc = new Calculator(0);

calc.add(10).subtract(2).multiply(3);
console.log(calc)