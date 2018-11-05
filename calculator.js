'use strict'

class Calculator {
  constructor(initial_num = 1) {
      // by default initial_num equals to one
      this._num = initial_num
  }

  add(num) {
      this._num += num
      return this
  }

  subtract(num) {
      this._num -= num
      return this
  }

  multiply(num) {
      this._num *= num
      return this
  }

  divide(num) {
    this._num /= num
    return this
  }

  square(num) {
      this._num = this._num ** num
      return this
  }

  squareRoot(num) {
      this._num = this._num ** (1/num)
      return this
  }

  areaOfCircle() {
      this._num = (this._num ** 2) * (22/7)
      return this
  }   

  value() {
    console.log(this._num)
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
