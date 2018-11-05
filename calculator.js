'use strict'

class Calculator {
  //write your code here
  constructor(input = 0) {
    this.number = input
  }
  add(inputB) {
    this.number += inputB
    return this
  }
  substract(inputB) {
    this.number -= inputB
    return this
  }
  multiply(inputB) {
    this.number *= inputB
    return this
  }
  divide(inputB) {
    this.number /=  inputB
    return this
  }
  square(inputB) {
    this.number = Math.pow(this.number,inputB)
    return this
  }
  squareRoot() {
    this.number = Math.sqrt(this.number)
    return this
  }
  pi(){
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

module.exports = Calculator
