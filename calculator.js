'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }

  add (num) {
    this.number = this.number + num
    return this
  }

  subtract (num) {
    this.number = this.number - num
    return this
  }

  multiply (num) {
    this.number = this.number * num
    return this
  }

  divide (num) {
    this.number = this.number / num
      return this
    }

  square (num) {
    let temp = this.number

    for(let i = 1; i < num; i++) {
      this.number = this.number * temp
    }
    return this
  }
  
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }

  phi() {
    let phi = 22/7
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
