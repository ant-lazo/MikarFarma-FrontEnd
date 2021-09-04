import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { AlmacenComponent } from './almacen.component';

const routes: Routes = [
  // enrutamos el component productos
  {path: 'almacen', component: AlmacenComponent}
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
export class AlmacenRoutingModule { }