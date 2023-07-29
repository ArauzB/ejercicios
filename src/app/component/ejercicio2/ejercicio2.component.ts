import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {


  constructor() { }


  ngOnInit(): void {
  
  }

  num1!: number;
  num2!: number;
  maxNumber?: number;
  minNumber?: number;
  areEqual?: boolean;

  compareNumbers(): void {
    if (this.num1 === this.num2) {
      this.areEqual = true;
      this.maxNumber = this.num1;
      this.minNumber = this.num2;
    } else if (this.num1 > this.num2) {
      this.areEqual = false;
      this.maxNumber = this.num1;
      this.minNumber = this.num2;
    } else {
      this.areEqual = false;
      this.maxNumber = this.num2;
      this.minNumber = this.num1;
    }
  }
}
