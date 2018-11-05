'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

const hitung = new Calculator();
console.log(hitung.add(4).multiply(2).square(2).result());