import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line to import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { Ejercicio1Component } from './component/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './component/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './component/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './component/ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './component/ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './component/ejercicio6/ejercicio6.component';
import { Ejercicio7Component } from './component/ejercicio7/ejercicio7.component';
import { Ejercicio8Component } from './component/ejercicio8/ejercicio8.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component,
    Ejercicio6Component,
    Ejercicio7Component,
    Ejercicio8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add this line to import FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
