'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0;
    this.pi = Math.PI;
  }
  add (num) {
    this.result +=num;

    return this;
  }
  subtract (num) {
    this.result -= num;

    return this;
  }
  multiply (num) {
    this.result *= num;

    return this;
  }
  divide (num) {
    this.result /= num

    return this;
  }
  square (num) {
    this.result = Math.pow(this.result, num)

    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result);

    return this
  }

  circumfrence(){
    this.result = 2 * this.pi * this.result

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

let test = new Calculator();
// console.log(test.add(5).square(2).subtract(5).multiply(2).divide(8).add(4).squareRoot())
console.log(test.add(3).circumfrence())


module.exports = Calculator
