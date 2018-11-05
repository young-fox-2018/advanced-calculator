'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
    this.phi = 3.14
  }
  add (number) {
     this.number +=  number
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
    this.number = Math.pow(this.number, number)
    return this
  }
  squareRoot (number) {
    this.number = Number(Math.pow(this.number, 1/number).toFixed(2))
    return this
  }
  circleArea (jariJari) {
    this.number = Number((this.phi * Math.pow(jariJari,2)).toFixed(2))
    return this
  }

  setNumber(number){
    this.number = number
    return this
  }
  getNumber(){
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
