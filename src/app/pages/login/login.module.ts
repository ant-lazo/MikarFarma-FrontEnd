import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ruta
import { LoginRoutingModule } from './login-routing.module';

//componente
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
