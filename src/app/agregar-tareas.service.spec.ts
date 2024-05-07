import { Injectable } from '@angular/core';
import { Tarea } from 'tareas';
@Injectable({
  providedIn: 'root'
})
export class AgregarTareasService {

  constructor() { }

  indice=0;
  tareas : Tarea[] = [];

  getTareas() {
    return this.tareas;
    
  }

  agregarTarea(tareaNueva: Tarea){

    this.tareas.push(tareaNueva);
  }
  deleteTarea(id: number){
    this.tareas.splice(id, 1);
  }
  
}
