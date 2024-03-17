import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {}

  title: string='Mi nueva pagina';

  imgUrl: string = 'https://th.bing.com/th/id/OIP.E2ZrAFvOrm_wMdE694oZCwHaEK?rs=1&pid=ImgDetMain'
  hazmeClic(): void{
    alert("hiciste click!");
  }
  verdadero: boolean = false;
  tarjetas = [
    {
      nombre: 'Maria Mercedez de la Cruz',
      numero: 8753873878786556,
      vigenciaInicio: '08',
      vigenciaFin: '27',
      CVV: '088'
    },
    {
      nombre: 'Arturo Alejandro Arellano',
      numero: 972697367191209,
      vigenciaInicio: '08',
      vigenciaFin: '27',
      CVV: '088'
    },
    {
      nombre: 'Cesar Daniel Morales',
      numero: 29376938983917,
      vigenciaInicio: '08',
      vigenciaFin: '27',
      CVV: '088'
    }
  ];
}
