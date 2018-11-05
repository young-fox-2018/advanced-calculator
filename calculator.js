'use strict'

class Calculator {
  //write your code here
  constructor(number) {
      this.number = number
  }

  pi(){
      return Math.PI
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
    
  nRoot(number){
      this.number = (Math.pow(this.number,(1/number))).toFixed(2)
      return this
  }

  pow(number){
    this.number = Math.pow(this.number,number)
    return this
  }

  circleArea(radius){
    this.number = Number((Math.PI * radius * radius).toFixed(2))
    return this
  }

  equal(){
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
