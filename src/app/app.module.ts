import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulo personalizados
import { PagesModule } from './pages/pages.module';

//Se tiene que importar el app-routing.module.ts (con el codigo que puse averiguar que si por defecto se genera?)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClienteService } from './pages/main-page/clientes/cliente.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
