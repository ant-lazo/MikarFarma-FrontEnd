import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages-routing.module';

//componentes
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
