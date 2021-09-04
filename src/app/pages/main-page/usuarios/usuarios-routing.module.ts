import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  // enrutamos el component productos
  {path: 'usuarios', component: UsuariosComponent}
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
export class UsuariosRoutingModule { }