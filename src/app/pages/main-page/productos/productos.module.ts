import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//importar componente del mismo producto
import { ProductosComponent } from './productos.component';
//importamos el routing module del mismo producto
import { ProductosRoutingModule } from './productos-routing.module';

@NgModule({
  declarations: [
    //los componentes se declaran
    ProductosComponent
  ],
  imports: [
    CommonModule,
    //se importa el producto routing
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
