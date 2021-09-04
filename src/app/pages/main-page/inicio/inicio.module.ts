import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importamos el componente
import { InicioComponent } from './inicio.component';
//importamos el routingModule
import { InicioRoutingModule } from './inicio-routing.module';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
