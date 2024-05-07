import { Component, OnInit } from '@angular/core';
import { Tarea } from 'tareas';
import { Router } from '@angular/router';
import { AgregarTareasService } from '../agregar-tareas.service.spec';

@Component({
  selector: 'app-vista-tareas',
  templateUrl: './vista-tareas.component.html',
  styleUrls: ['./vista-tareas.component.scss'],
})
export class VistaTareasComponent  implements OnInit {

  constructor(private tareaServicio: AgregarTareasService,public router: Router) { }
  indices= this.tareaServicio.indice
  tareaServicioCadena: Tarea = this.tareaServicio.tareas[this.indices];

  ngOnInit() {}

}
