import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from './usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

//Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

//importar pipe
import { JsonToStringPipe } from '../../../pipe/json-to-string.pipe';

@NgModule({
  declarations: [
    UsuariosComponent,
    JsonToStringPipe
    ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  exports:[
    JsonToStringPipe
  ]
})
export class UsuariosModule { }
