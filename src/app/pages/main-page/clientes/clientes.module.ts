import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesComponent } from './clientes.component';
import { ClientesRoutingModule } from './clientes-routing.module';

//angular material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

//Reactivo
import { ReactiveFormsModule } from '@angular/forms';

//Para que afecte el reactivo tambien al componenente formcliente
//el profe borro esto
import { FormclienteComponent } from './formcliente/formcliente.component'; 


@NgModule({
  declarations: [
    ClientesComponent,
    FormclienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
