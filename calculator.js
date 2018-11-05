'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.num = num
    this.phi = 22/7
  }

  add (num) {
    this.num += num
    return this
  }
  subtract (num) {
    this.num -= num
    return this
  }
  multiply (num) {
    this.num = this.num * num
    return this
  }
  divide (num) {
    this.num = this.num / num
    return this
  }
  square (num) {
    this.num = Math.pow(this.num, num)
    return this
  }
  squareRoot (num) {
    this.num = Math.sqrt(this.num, num)
    return this
  }
  circleArea (r) {
    this.num = this.phi * r * r
    return this
  }
  save() {
    return this.num
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
