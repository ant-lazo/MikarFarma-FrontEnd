import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  // enrutamos el component productos
  {path: 'dashboard', component: DashboardComponent}
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
export class DashboardRoutingModule { }