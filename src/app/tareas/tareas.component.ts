import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Tarea } from 'tareas';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
interface tarjeta{
  "Nombre": string, 
  "Mes": String,
  "Dia": String,
  "Detalles": String,
}

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss'],
})
export class TareasComponent  {


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  isModalOpen= false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  nuevaTarea: Tarea = {
    nombre: '',
    dia: '',
    mes: '',
    descripcion: ''
  } 

  agregarTarea(){
    this.modalCtrl.dismiss(this.nuevaTarea);
 
}}
