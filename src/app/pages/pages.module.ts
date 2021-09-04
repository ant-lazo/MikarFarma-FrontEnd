import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
//importando shared module
import { SharedModule } from '../shared/shared.module';
//import { InicioComponent } from './main-page/inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
//import { ClientesComponent } from './main-page/clientes/clientes.component';
//import { ProductosComponent } from './main-page/productos/productos.component';
//import { VentasComponent } from './main-page/ventas/ventas.component';
//import { ComprasComponent } from './main-page/compras/compras.component';
//probando integracion de cors
import {HttpClientModule} from '@angular/common/http';
import { Error404Component } from './main-page/error404/error404.component';
//import { UsuariosComponent } from './main-page/usuarios/usuarios.component';
//import { AlmacenComponent } from './main-page/almacen/almacen.component';
//import { ComprobantesComponent } from './main-page/comprobantes/comprobantes.component';
//import { LaboratoriosComponent } from './main-page/laboratorios/laboratorios.component';
//import { ReportesComponent } from './main-page/reportes/reportes.component';
//import { DashboardComponent } from './main-page/dashboard/dashboard.component';

@NgModule({
  declarations: [
    MainPageComponent,
    //InicioComponent,
    //ClientesComponent,
    //ProductosComponent,
    //VentasComponent,
    //ComprasComponent,
    //UsuariosComponent,
    //AlmacenComponent,
    //ComprobantesComponent,
    //LaboratoriosComponent,
    //ReportesComponent,
    //DashboardComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class PagesModule { }
