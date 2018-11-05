'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
  }
  add (num) {
    this.num = num
    return this
  }
  subtract (num) {
    this.num -= num
    return this
  }
  multiply (num) {
    this.num *= num
    return this
  }
  divide () {
    this.num /= num
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

  circle(num) {
    this.num = Math.PI * num*num
    return this
  }

  getResult() {
    return this.num
  }
}

let num = 0
let calc = new Calculator(num)

console.log(
  calc.circle(2).getResult()
);






/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
