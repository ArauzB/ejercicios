import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username?: string;
  password?: string;
  showMessage: boolean = false;
  message?: string;

  onSubmit(): void {
    // Aquí puedes agregar tu lógica para validar el inicio de sesión
    // Por ejemplo, comparando el usuario y la contraseña con datos almacenados en una base de datos o en variables
    if (this.username === 'usuario' && this.password === 'contraseña') {
      this.message = 'Inicio de sesión exitoso.';
    } else {
      this.message = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }

    this.showMessage = true;
  }
}