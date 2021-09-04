import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ComprobantesComponent } from './comprobantes.component';

const routes: Routes = [
  // enrutamos el component productos
  {path: 'comprobantes', component: ComprobantesComponent}
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
export class ComprobantesRoutingModule { }