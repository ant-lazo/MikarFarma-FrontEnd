import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

//importando shared module
import { SharedModule } from '../shared/shared.module';
//import { InicioComponent } from './main-page/inicio/inicio.component';

import { AppRoutingModule } from '../app-routing.module';

//import { ClientesComponent } from './main-page/clientes/clientes.component';
import { ProductosComponent } from './main-page/productos/productos.component';
import { VentasComponent } from './main-page/ventas/ventas.component';
import { ComprasComponent } from './main-page/compras/compras.component';


@NgModule({
  declarations: [
    MainPageComponent,
    //InicioComponent,
    //ClientesComponent,
    ProductosComponent,
    VentasComponent,
    ComprasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
