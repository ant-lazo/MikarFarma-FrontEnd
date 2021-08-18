import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { MainPageComponent } from './main-page/main-page.component';
//import { InicioComponent } from './main-page/inicio/inicio.component';
//import { ClientesComponent } from './main-page/clientes/clientes.component';
import { ProductosComponent } from './main-page/productos/productos.component';
import { VentasComponent } from './main-page/ventas/ventas.component';
import { ComprasComponent } from './main-page/compras/compras.component';

const routes: Routes = [
  {path: '', 
  component: MainPageComponent,
  children : [
    { path: '', loadChildren: ()=> import('./main-page/inicio/inicio.module').then(m=>m.InicioModule)},
    { path: '', loadChildren: ()=> import('./main-page/clientes/clientes.module').then(m=>m.ClientesModule)},
    { path: 'productos', component: ProductosComponent},
    { path: 'ventas', component: VentasComponent},
    { path: 'compras', component: ComprasComponent}
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