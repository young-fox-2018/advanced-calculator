'use strict'
const argv = process.argv
const Calculator = require("./calculator.js")

let number = new Calculator()
console.log(number.add(2).multiply(2).substract(2).divide(2).add(1).square(2).squareRoot().add(number.pi()))
// switch (argv[2]) {
//     case '+':
    //     number.add(Number(argv[3]))
    //     console.log(`${number.number}`)
    //     break;
    // case "-":
    //     number.substract(Number(argv[3]))
    //     console.log(`${number.number}`)
    //     break;
    // case '*':
    //     number.multiply(Number(argv[3]))
    //     console.log(`${number.number}`)
    //     break;
    // case '/':
    //     number.divide(Number(argv[3]))
    //     console.log(`${number.number}`)
    //     break;
    // case '^2':
    //     number.square(Number(argv[3]))
    //     console.log(`${number.number}`)
    //     break;
    // case "sqrt":
    //     number.squareroot(Number(argv[3]))
    //     console.log(`${number.number}`)
    //     break;
    // case "pi":
    //     number.squareroot(Number(argv[3]))
    //     return console.log(`${number.number}`)
    // default:
    //     return console.log(`${number.number}`)
// }
// execute function on calculator.js in here
