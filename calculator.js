'use strict'
class Calculator {
  //write your code here
  constructor(number) {
    this.hasil = number
  }
  add(number) {
    this.hasil += number
    return this
  }
  subtract(number) {
    this.hasil -= number
    return this
  }
  multiply(number) {
    this.hasil *= number
    return this
  }
  divide(number) {
    this.hasil /= number
    return this
  }
  square(number) {
    this.hasil = Math.pow(this.hasil, number)
    return this
  }
  squareRoot() {
    this.hasil = Math.sqrt(this.hasil)
    return this
  }
  pi() {
    return Math.PI
  }

}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

// let kalculator = new Calculator(9)
// console.log(kalculator.add(4).multiply(10))

module.exports = Calculator