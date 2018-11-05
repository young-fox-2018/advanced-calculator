'use strict'

class Calculator {
  //write your code here
  constructor(number = 0) {
    this._number = number
  }
  add(num) {
    this._number += num
    return this
  }
  subtract(num) {
    this._number -= num
    return this
  }
  multiply(num) {
    this._number *= num
    return this
  }
  divide(num) {
    this._number /= num
    return this
  }
  square(exponent) {
    let result = Math.pow(this._number, exponent)
    this._number = result
    return this
  }
  squareRoot() {
    let result = Math.sqrt(this._number)
    this._number = result
    return this
  }
  calculatePI() {
    let result = Math.PI
    return result
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calc = new Calculator()

calc.add(20).subtract(10).multiply(3).divide(2).square(2).squareRoot()

console.log(calc._number)

module.exports = Calculator
