'use strict'

class Calculator {

  constructor (number) {
    this.number = number;
  }
  add (num) {
    this.number += num;
    return this;
  }
  subtract (num) {
    this.number -= num;
    return this;
  }
  multiply (num) {
    this.number *= num;
    return this;
  }
  divide (num) {
    this.number /= num;
    return this;
  }
  square (num) {
    this.number = Math.pow(this.number, num);
    return this;
  }
  squareRoot () {
    let temp = this.number;
    this.number = Math.sqrt(temp);

    return this
  }
  circlePhi() {
    let phi = 22/7;
    this.number *= phi;

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
