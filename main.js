'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
// calculator can : add, substract, multiply, divide, square, pow, squareRoot, nRoot
// calculate circle input : radius

let calculate = new Calculator(1)
let hasil = calculate.add(2).multiply(3).subtract(2).squareRoot().square().pow(3).divide(8).nRoot(4).equal()
console.log(hasil)

let calculate2 = new Calculator(100)
console.log(calculate2.multiply(calculate2.pi()).equal())

//calculate circle area
let calculate3 = new Calculator(1)
let luas = calculate3.circleArea(10).equal()
console.log(luas)
