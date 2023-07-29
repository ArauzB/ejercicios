import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio8',
  templateUrl: './ejercicio8.component.html',
  styleUrls: ['./ejercicio8.component.css']
})
export class Ejercicio8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sueldo: number = 0;
  aumento: number = 0;
  nuevoSueldo: number = 0;

  calcularAumento(): void {
    if (this.sueldo >= 3500 && this.sueldo <= 6000) {
      this.aumento = this.sueldo * 0.03;
    } else if (this.sueldo >= 6001 && this.sueldo <= 10000) {
      this.aumento = this.sueldo * 0.07;
    } else if (this.sueldo >= 10001 && this.sueldo <= 15000) {
      this.aumento = this.sueldo * 0.09;
    } else {
      this.aumento = 0;
    }

    this.nuevoSueldo = this.sueldo + this.aumento;
  }
}
