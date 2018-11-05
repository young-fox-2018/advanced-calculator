'use strict'

class Calculator {
  constructor (num = 0) {
    this.result = num
  }

  add (num) {
    this.result += num
    return this
  }

  subtract (num) {
    this.result -= num
    return this
  }

  multiply (num) {
    this.result = this.result*num
    return this
  }

  divide (num) {
    this.result = this.result/num
    return this
  }

  square (pangkat) {
    this.result = Math.pow(this.result , pangkat)
    return this

  }

  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }

  circle() {
    this.result = this.result* 3.14
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
