'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    // this.pi = Math.PI
    this.number = num
  }
  add (num) {
    this.number += num
    return this
  }
  subtract (num) {
    this.number -= num
    return this
  }
  multiply (num) {
    this.number *= num
    return this
  }
  divide (num) {
    this.number /= num
    return this
  }
  square (num) {
    Math.pow(this.number, num)
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  pi(){
    return Math.PI
  }

  equal(){
    console.log(this.number)
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator()
calculator.add(calculator.pi()).equal()

module.exports = Calculator
