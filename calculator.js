'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    if(number === 'phi'){
      this.result = Math.PI
    }else{
      this.result = number
    }
    // this.phi = Math.PI
  }

  add (number) {
    this.result += number
    return this
  }
  subtract (number) {
    this.result -= number
    return this
  }
  multiply (number) {
    this.result *= number
    return this
  }
  divide (number) {
    this.result /= number
    return this
  }
  square (number) {
    this.result = Math.pow(this.input, number)
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
  phi () {
    this.result = Math.PI
    return this
  }
  // circle () {
  //   // const phi = 22/7
  //   this.result *= (this.result * this.result * phi)
  //   return this
  // }
  equal() {
    return this.result
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

