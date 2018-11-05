'use strict'

class Calculator {
  //write your code here
  constructor (numInput) {
    this.res = numInput
    this.pi = Math.PI
  }

  add (num2) {
    this.res += num2
    return this
  }

  subtract (num2) {
    this.res -= num2
    return this
  }
  
  multiply (num2) {
    this.res *= num2
    return this
  }
  
  divide (num2) {
    this.res /= num2
    return this
  }
  
  square (num2) {
    this.res = Math.pow(this.res, num2) 
    return this
  }
  
  squareRoot () {
    this.res = Math.sqrt(this.res)
    return this
  }
  
  circleArea(){
    this.res *= this.pi
    return this
  }
  
  result(){
   return this.res 
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
