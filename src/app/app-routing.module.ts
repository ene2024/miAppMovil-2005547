import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { AgregarTareaComponent } from './tareas/agregar-tarea/agregar-tarea.component';
const routes: Routes = [
  {
    path: 'tareas', component: TareasComponent
  },
  {
    path: 'agregarTarea', component: AgregarTareaComponent
  },
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
