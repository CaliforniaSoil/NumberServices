import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  numbersAlpha: number[] = [];
  numbersBeta: number[] = [];
  numbersKappa: number[] = [];



  constructor() { }


  retrieveNumbersAlpha(): number[] {
    return this.numbersAlpha;
  }
  retrieveNumbersBeta(): number[] {
    return this.numbersBeta;
  }
  retrieveNumbersKappa(): number[] {
    return this.numbersKappa;
  }
  addNumberAlpha() {
    var num1 = Math.floor(Math.random() * 20) + 1;
    console.log(num1)
    this.numbersAlpha.push(num1);
    console.log(this.numbersAlpha);
  }
  addNumberBeta() {
    var num2 = Math.floor(Math.random() * 20) + 1;
    console.log(num2)
    this.numbersBeta.push(num2);
    console.log(this.numbersBeta);
  }
  calculate() {
    var sum1 = this.numbersAlpha.reduce((a, b) => a + b, 0);
    console.log(sum1);
    var sum2 = this.numbersBeta.reduce((a, b) => a + b, 0);
    console.log(sum2);
    var diff = sum1 - sum2;
    console.log(diff);
    this.numbersKappa.push(diff);
    console.log(this.numbersKappa);
  }

}
