'use strict'

class Calculator {
  constructor (firstNumber) {
    this.result = firstNumber
  }

  getResult() {
    return this.result
  }

  add(number) {
    this.result += number

    return this
  }

  substract(number) {
    this.result -= number

    return this
  }

  multiply(number) {
    this.result *= number

    return this
  }

  divide(number) {
    this.result /= number

    return this
  }

  square() {
    this.result = this.result * this.result

    return this
  }

  squareRoot() {
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

module.exports = Calculator
