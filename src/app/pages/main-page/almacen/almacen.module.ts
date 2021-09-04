import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlmacenComponent } from './almacen.component';
import { AlmacenRoutingModule } from './almacen-routing.module';

@NgModule({
  declarations: [AlmacenComponent],
  imports: [
    CommonModule,
    AlmacenRoutingModule
  ]
})
export class AlmacenModule { }
