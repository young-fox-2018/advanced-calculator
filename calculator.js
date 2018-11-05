'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (numAdd) {
    this.number = this.number + numAdd
    return this
  }
  subtract (numSubstract) {
    this.number = this.number - numSubstract
    return this
  }
  multiply (numMultiply) {
    this.number = this.number * numMultiply
    return this
  }
  divide (numDivide) {
    this.number = this.number / numDivide
    return this
  }
  square (numSquare) {
    this.number = Math.pow(this.number,numSquare) 
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
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

module.exports = Calculator
