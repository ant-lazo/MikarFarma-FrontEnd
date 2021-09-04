import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ComprasComponent } from './compras.component';

const routes: Routes = [
  // enrutamos el component productos
  {path: 'compras', component: ComprasComponent}
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
export class ComprasRoutingModule { }