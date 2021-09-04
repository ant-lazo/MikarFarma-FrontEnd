import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { InicioComponent } from './inicio.component';

const routes: Routes = [
  // enrutamos el component inicio
  {path: '', component: InicioComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
// nombramos el routingMdoule
export class InicioRoutingModule { }