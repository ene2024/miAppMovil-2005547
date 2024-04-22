import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'tareas';
import { AgregarTareasService } from 'src/app/agregar-tareas.service.spec';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  constructor(private tareaServicio: AgregarTareasService, public router: Router ) { }

  tareaServicioArray: Tarea[] = this.tareaServicio.tareas;

  ngOnInit() {}




  nuevaTarea: Tarea = {
    nombre: '',
    dia: '',
    mes: '',
    descripcion: '' 
  }

 
  submit(): void{
    this.tareaServicio.agregarTarea(this.nuevaTarea);
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
}
