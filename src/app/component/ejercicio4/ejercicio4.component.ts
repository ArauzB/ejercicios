import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  grades: number[] = [0, 0, 0, 0, 0];
  average: number = 0;
  passStatus: string = '';

  calculateAverage(): void {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    this.average = sum / this.grades.length;
    this.passStatus = this.average > 61 ? 'Aprobado' : 'Reprobado';
  }
}