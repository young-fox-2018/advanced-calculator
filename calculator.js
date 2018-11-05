'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (number) {
    this.number += number
    return this 
  }
  subtract (number) {
    this.number -= number
    return this
  }
  multiply (number) {
    this.number *= number
    return this
  }
  divide (number) {
    this.number /= number
    return this
  }
  square (number) {
    this.number = Math.pow(this.number,number)

    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)

    return this
  }
  circle () {
    this.number = Math.PI * (Math.pow(this.number, 2))
    return this
  }
  getResult () {
    return this.number
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
