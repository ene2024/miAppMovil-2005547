import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
interface tarjeta{
  Nombre: string, // @ts-ignore: Name is possibly 'null'
  Mes: String,
  Dia: String,
  Detalles: String,
}
let tarjetita: tarjeta[] = [];
const Name = document.getElementById("nombre")!;
const Month = document.getElementById("month")!;
const Day = document.getElementById("day")!;
const Details = document.getElementById("details")!;
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  {

  pasarInfo() {
    this.router.navigate(['/agregarTarea']);
    
    const nueva: tarjeta =
    {
     Nombre: Name.innerHTML,
     Mes: Month.innerHTML,
     Dia: Day.innerHTML,
     Detalles: Details.innerHTML
    }
    tarjetita.push(nueva);
    
  }

  constructor(public router: Router) { }

  ngOnInit() {}

 
}
