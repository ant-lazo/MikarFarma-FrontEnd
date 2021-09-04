import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { MainPageComponent } from './main-page/main-page.component';
//import { InicioComponent } from './main-page/inicio/inicio.component';
//import { ClientesComponent } from './main-page/clientes/clientes.component';
//import { ProductosComponent } from './main-page/productos/productos.component';
//import { VentasComponent } from './main-page/ventas/ventas.component';
//import { ComprasComponent } from './main-page/compras/compras.component';
import { Error404Component } from './main-page/error404/error404.component';
//import { UsuariosComponent } from './main-page/usuarios/usuarios.component';
//import { AlmacenComponent } from './main-page/almacen/almacen.component';
//import { ComprobantesComponent } from './main-page/comprobantes/comprobantes.component';
//import { LaboratoriosComponent } from './main-page/laboratorios/laboratorios.component';
//import { ReportesComponent } from './main-page/reportes/reportes.component';
//import { DashboardComponent } from './main-page/dashboard/dashboard.component';

//importar el guard para la restriciones de rutas
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  { path: 'login', loadChildren: ()=> import('./login/login.module').then(m=>m.LoginModule)},
  { path: '', 
  component: MainPageComponent, canActivate: [ AuthGuard ],
  children : [
    { path: '', loadChildren: ()=> import('./main-page/inicio/inicio.module').then(m=>m.InicioModule)},
    { path: '', loadChildren: ()=> import('./main-page/clientes/clientes.module').then(m=>m.ClientesModule)},
    { path: '', loadChildren: ()=> import('./main-page/productos/productos.module').then(m=>m.ProductosModule)},
    { path: '', loadChildren: ()=> import('./main-page/ventas/ventas.module').then(m=>m.VentasModule)},
    { path: '', loadChildren: ()=> import('./main-page/compras/compras.module').then(m=>m.ComprasModule)},
    { path: '', loadChildren: ()=> import('./main-page/usuarios/usuarios.module').then(m=>m.UsuariosModule)},
    { path: '', loadChildren: ()=> import('./main-page/almacen/almacen.module').then(m=>m.AlmacenModule)},
    { path: '', loadChildren: ()=> import('./main-page/comprobantes/comprobantes.module').then(m=>m.ComprobantesModule)},
    { path: '', loadChildren: ()=> import('./main-page/laboratorios/laboratorios.module').then(m=>m.LaboratoriosModule)},
    { path: '', loadChildren: ()=> import('./main-page/reportes/reportes.module').then(m=>m.ReportesModule)},
    { path: '', loadChildren: ()=> import('./main-page/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    { path: '**', component: Error404Component}
  ]}
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
export class PagesRoutingModule { }