import { Component, OnInit, Input } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {

  @Input() tarjetita:any

  constructor() { }

  ngOnInit() {}

}
