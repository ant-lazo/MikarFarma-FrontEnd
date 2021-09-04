import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprobantesComponent } from './comprobantes.component';
import { ComprobantesRoutingModule } from './comprobantes-routing.module';

@NgModule({
  declarations: [ComprobantesComponent],
  imports: [
    CommonModule,
    ComprobantesRoutingModule
  ]
})
export class ComprobantesModule { }
