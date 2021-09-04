import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { LaboratoriosComponent } from './laboratorios.component';

const routes: Routes = [
  // enrutamos el component productos
  {path: 'laboratorios', component: LaboratoriosComponent}
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
export class LaboratoriosRoutingModule { }