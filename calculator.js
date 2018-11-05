'use strict'

class Calculator {

  constructor(first_number) {
    this.first_number = first_number
  }
  add(second_number) {
    this.first_number += second_number
    return this
  }
  subtract(second_number) {
    this.first_number -= second_number
    return this
  }
  multiply(second_number) {
    this.first_number *= second_number
    return this
  }
  divide(second_number) {
    this.first_number /= second_number
    return this
  }
  square(second_number) {
    this.first_number = Math.pow(this.first_number, second_number)
    return this
  }
  squareRoot() {
    this.first_number = Math.sqrt(this.first_number)
    return this
  }

  pi() {
    return Math.PI
  }
}

module.exports = Calculator
