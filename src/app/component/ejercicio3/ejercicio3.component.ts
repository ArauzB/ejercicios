import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numericValue: string = '';
  isNumeric: boolean = true;

  validateNumericInput(event: KeyboardEvent): void {
    const keyCode = event.which || event.keyCode;

    // Permitir las teclas de navegación y retroceso
    if (keyCode === 8 || keyCode === 37 || keyCode === 39) {
      this.isNumeric = true;
      return;
    }

    // Verificar si el código de tecla está fuera del rango numérico (48-57)
    if (keyCode < 48 || keyCode > 57) {
      this.isNumeric = false;
      event.preventDefault();
    } else {
      this.isNumeric = true;
    }
  }
}

