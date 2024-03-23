import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor");
  }

  ngOnChanges(){
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck(){
    console.log("AppComponent: DoCheck");
  }
  ngAfterContentInit(){
    console.log("AppComponent: AfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("AppComponent: AfterContentCkecked");
  }
  ngAfterViewInit(){
    console.log("AppComponent: AfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("AppComponent: AfterViewChecked");
  }
  ngOnDestroy(){
    console.log("AppComponent: OnDestroy");
  }

  title: string='Mi nueva pagina';

  imgUrl: string = 'https://th.bing.com/th/id/OIP.E2ZrAFvOrm_wMdE694oZCwHaEK?rs=1&pid=ImgDetMain'
  hazmeClic(): void{
    alert("hiciste click!");
  }
  
}
