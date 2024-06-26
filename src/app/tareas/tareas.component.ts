import { Component, OnInit, Output } from '@angular/core';
import { AgregarTareasService } from '../agregar-tareas.service.spec';
import { Router } from '@angular/router';
import { Tarea } from 'tareas';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

indice=999
  constructor(private tareaServicio: AgregarTareasService,public router: Router) { }
  tareaServicioArray: Tarea[] = this.tareaServicio.tareas;

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  eliminarTarea(pst: number){
    this.tareaServicio.deleteTarea(pst);
  }
  vistaTareas(ids: number){
    this.indice=ids;
  }
  ngOnInit() {}

}
