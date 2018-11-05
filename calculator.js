'use strict'

class Calculator {
  //write your code here
  constructor(number) {
      this.number = number
      this.pi = Math.PI
  }

  add(number) {
      this.number += number
      return this
  }

  subtract(number) {
      this.number -= number
      return this
  }

  multiply(number) {
      this.number *= number
      return this
  }
  
  divide(number) {
      this.number /= number
      return this
  }
  
  square() {
      this.number *= this.number
      return this
  }

  squareRoot () {
      this.number = Math.sqrt(this.number)
      return this
  }

  pow(number){
    this.number = Math.pow(this.number,number)
    return this
  }

  circleArea(radius){
    this.number = Math.round(this.pi * radius * radius)
    return this
  }

  getNumber(){
    return this.number
  }

  nRoot(number){
    this.number = Math.pow(this.number,(1/number))
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
