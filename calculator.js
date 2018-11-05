'use strict'

class Calculator {
  //write your code here
  constructor (number = 0) {
    this.result = number
  }
  add (input) {
    this.result += input
    return this
  }
  subtract (input) {
    this.result -= input
    return this
  }
  multiply (input) {
    this.result *= input
    return this
  }
  divide (input) {
    this.result /= input
    return this
  }
  square (input) {
    this.result = Math.pow(this.result, input)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let count = new Calculator()
console.log(count.add(10).subtract(3).multiply(5).divide(7).square(2).squareRoot())


module.exports = Calculator
