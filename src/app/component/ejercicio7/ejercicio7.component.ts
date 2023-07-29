import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  grades: number[] = [0, 0, 0, 0];
  average: number = 0;
  passStatus: string = '';

  calculateAverage(): void {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    this.average = sum / this.grades.length;
    this.passStatus = this.average > 61 ? 'Aprobado' : 'Reprobado';
  }
}
