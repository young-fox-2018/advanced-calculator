'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
// calculator can : add, substract, multiply, divide, square, pow, squareRoot, nRoot
// calculate circle input : radius

let input_1 = 0  //set first input
let calculate = new Calculator(input_1)
//do calculate
let hasil = calculate.add(2).multiply(3).subtract(2).squareRoot().square().pow(3).divide(8).nRoot(3).getNumber()
console.log(hasil)


//calculate circle area
let calculate2 = new Calculator(1)
let luas = calculate.circleArea(10).getNumber()
console.log(luas)
