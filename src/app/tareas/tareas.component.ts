import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface tarjeta{
  "Nombre": string, 
  "Mes": String,
  "Dia": String,
  "Detalles": String,
}
let tarjetita: tarjeta[] = [];

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  {

  pasarInfo() {
    const Name = document.getElementById("nombre")!;
const Month = document.getElementById("month")!;
const Day = document.getElementById("day")!;
const Details = document.getElementById("details")!;
   
    
    const nueva: tarjeta =
    {
     Nombre: Name.innerHTML,
     Mes: Month.outerHTML,
     Dia: Day.outerHTML,
     Detalles: Details.outerHTML
    }
    tarjetita.push(nueva);
    this.router.navigate(['/agregarTarea']);
    console.log(tarjetita);
  }

  constructor(public router: Router) { }

  ngOnInit() {}

 
}
