import { Injectable } from '@angular/core';
import { Tarea } from 'tareas';
@Injectable({
  providedIn: 'root'
})
export class AgregarTareasService {

  constructor() { }

  tareas : Tarea[] = [];

  getTareas() {
    return this.tareas;
    
  }

  agregarTarea(tareaNueva: Tarea){

    this.tareas.push(tareaNueva);
    //Agrega una Tarea al Arreglo
  }
}
