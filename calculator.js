'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.result = number
    // this.result = 0
  }
  add (number) {
    this.result += number
    return this
  }
  subtract (number) {
    this.result -= number
    return this
  }
  multiply (number) {
    this.result *= number
    return this
  }
  divide (number) {
    this.result /= number
    return this
  }
  square (number) {
    this.result = Math.pow(this.input, number)
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
  circle () {
    const phi = 3.14
    this.result *= (this.result * this.result * phi)
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
