import { Component, OnInit, Input} from '@angular/core';

import { Tarea } from 'tareas';
import { AgregarTareasService } from 'src/app/agregar-tareas.service.spec';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private tareaServicio: AgregarTareasService) { }

  tareaServicioArray: Tarea[] = this.tareaServicio.tareas;

  ngOnInit() {}

  @Input() tareaTitulo: string = '';


  tareaNombre: string = '';

  nuevaTarea: Tarea = {
    nombre: '',
    dia: 5,
    mes: 12,
    descripcion: '' 
  }

 
  submit(): void{
    this.tareaServicioArray.push(this.nuevaTarea);
    this.tareaServicio.agregarTarea(this.nuevaTarea);

  }

}
