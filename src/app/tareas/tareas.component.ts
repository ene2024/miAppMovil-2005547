import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  implements OnInit {

  @Output() tareaTitulo: string = 'TareaTitulo';

  constructor() { }

  ngOnInit() {}

}
