import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { ComidasComponent } from './comidas/comidas.component';
import { HomeComponent } from './home/home.component';
import { AntaresComponent } from './antares/antares.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ModalHappyComponent } from './ui/modal-happy/modal-happy.component';
import { FlechaIzquierdaComponent } from './ui/flecha-izquierda/flecha-izquierda.component';
import { DataPostComponent } from './data-post/data-post.component';
import { FrappeComponent } from './frappe/frappe.component';
import { EntradasComponent } from './entradas/entradas.component';
import { HeaderComponent } from '../layout/header/header.component';
import { Comidas2Component } from './comidas2/comidas2.component';



@NgModule({
  declarations: [
    ComidasComponent,
    FrappeComponent,
    HomeComponent,
    AntaresComponent,
    LoadingSpinnerComponent,
    ModalHappyComponent,
    FlechaIzquierdaComponent,
    DataPostComponent,
    EntradasComponent,
    HeaderComponent,
    Comidas2Component
  ],
  imports: [
    CommonModule,
    RoutesModule,
    Router
  ],
  exports:[
    HomeComponent
  ]
})
export class RoutesModule { }
