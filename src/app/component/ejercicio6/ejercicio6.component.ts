import { Component, OnInit } from '@angular/core';


interface Pizza {
  name: string;
  image: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-ejercicio6',
  templateUrl: './ejercicio6.component.html',
  styleUrls: ['./ejercicio6.component.css']
})
export class Ejercicio6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pizzas: Pizza[] = [
    {
      name: 'Pizza Margherita',
      image: 'https://example.com/pizza-margherita.jpg',
      price: 10,
      quantity: 0
    },
    {
      name: 'Pizza Pepperoni',
      image: 'https://example.com/pizza-pepperoni.jpg',
      price: 12,
      quantity: 0
    },
    // Agrega más pizzas aquí
  ];

  incrementQuantity(pizza: Pizza): void {
    pizza.quantity++;
  }
}