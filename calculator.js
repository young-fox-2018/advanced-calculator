'use strict'

class Calculator {
  //write your code here
  constructor (pelaku) {
    this.result = pelaku
  }
  add (num2) {
    this.result += num2
    return this
  }
  subtract (num2) {
    this.result -= num2
    return this

  }
  multiply (num2) {
    this.result *= num2
    return this
  }
  divide (num2) {
    this.result /= num2
    return this
  }
  square () {
    this.result *= result
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(result)
    return this
  }
}
let count = new Calculator(0)
console.log(count.add(10).multiply(3))
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator