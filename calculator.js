'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.number = num;
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
    this.number = Math.sqrt(this.number)
    return this;
  }

  areaCircle(){
    const PI = 22/7;
    this.number = PI * this.number * this.number;

    return this;
  }
  
  circumferenceCircle(){
    const PI = 22/7;
    this.number = 2 * PI * this.number;
  
    return this;
  }

  result() {
    return this.number;
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
