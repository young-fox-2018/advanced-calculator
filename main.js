'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
var calc1 = new Calculator(2);
calc1.add(2).subtract(2).multiply(2).divide(2).square(2).squareRoot()
console.log(calc1);
console.log(calc1.result);

var calc2 = new Calculator(7);
calc2.pi()
console.log(calc2);
console.log(calc2.result);