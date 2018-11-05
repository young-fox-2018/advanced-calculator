'use strict'

const Calculator = require("./calculator.js")
// const input = process.argv.slice(2)
let kalculator = new Calculator(5)

console.log(kalculator.add(4).multiply(kalculator.pi()))

// switch (input[0]) {
//     case 'add':
//         console.log(kalculator.add(Number(input[2])))
//         break
//     case 'substract':
//         console.log(kalculator.subtract(Number(input[2])))
//         break
//     case 'multiply':
//         console.log(kalculator.multiply(Number(input[2])))
//         break
//     case 'divide':
//         console.log(kalculator.divide(Number(input[2])))
//         break
//     case 'square':
//         console.log(kalculator.square(Number(input[2])))
//         break
//     case 'squareRoot':
//         console.log(kalculator.squareRoot(Number(input[2])))
//         break
// }

// execute function on calculator.js in here