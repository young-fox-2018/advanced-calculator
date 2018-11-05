'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (number) {
    this.number = this.number + number
    return this
  }
  subtract (number) {
    this.number = this.number - number
    return this
  }
  multiply (number) {
    this.number = this.number * number
    return this
  }
  divide (number) {
    this.number = this.number / number
    return this
  }
  square (number) {
    let temp = this.number

    for (var i = 1; i < number; i++) {
      this.number = this.number * temp
    }
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  phi () {
    const phi = 22/7
    this.number = this.number * phi
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
