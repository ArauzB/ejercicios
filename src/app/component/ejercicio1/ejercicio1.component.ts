import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  a!: number;
  b!: number;
  c!: number;
  // Declare more variables as needed for the other expressions

  resultA?: number;
  resultB?: number;
  resultC?: number;
  resultD?: number;
  resultE?: number;
  resultF?: number;

  constructor() { }

  ngOnInit(): void {
    this.calculate();
  }

  calculate(): void {
    // Implement the calculations for each expression using the provided variables
    this.resultA = 3/2 + 4/3;
    this.resultB = 1/(this.a - 5) - 3 * this.a * this.b / 4;
    this.resultC = this.a * this.a / (this.b - this.c) + (this.a - this.b) / (this.c - this.a * this.b / this.c);
    // Implement the other expressions in a similar manner

    // Round the results to two decimal places
    this.resultA = this.roundToTwoDecimalPlaces(this.resultA);
    this.resultB = this.roundToTwoDecimalPlaces(this.resultB);
    this.resultC = this.roundToTwoDecimalPlaces(this.resultC);
    // Round the other results to two decimal places
  }

  roundToTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}