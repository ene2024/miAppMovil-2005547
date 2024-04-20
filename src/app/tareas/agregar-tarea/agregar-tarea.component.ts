import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from 'tareas';
import { TareasComponent } from '../tareas.component';
@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.scss'],
})
export class AgregarTareaComponent  implements OnInit {



  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  
  tareaNueva: Tarea = {
    nombre: '',
    dia: '',
    mes: '',
    descripcion: ''
  } 

  tareas: Tarea[] = [];


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: TareasComponent,
    });
    modal.onDidDismiss().then((dataReturned) => {
      this.tareaNueva=dataReturned.data;
      console.log(this.tareaNueva);
      this.tareas.push(this.tareaNueva)
    });
    return await modal.present();
  }


}
