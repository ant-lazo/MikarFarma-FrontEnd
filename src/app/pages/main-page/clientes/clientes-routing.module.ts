import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ClientesComponent } from './clientes.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesComponent}
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
export class ClientesRoutingModule { }