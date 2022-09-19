import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ComidasComponent } from './components/comidas/comidas.component';
import { HomeComponent } from './components/home/home.component';
import { FrappeComponent } from './components/frappe/frappe.component';
import { AntaresComponent } from './components/antares/antares.component';
import { LoadingSpinnerComponent } from './components/ui/loading-spinner/loading-spinner.component';
import { FlechaIzquierdaComponent } from './components/ui/flecha-izquierda/flecha-izquierda.component';
import { DataPostComponent } from './components/data-post/data-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasPipe } from './pipes/categorias.pipe';
import { Comidas2Component } from './components/comidas2/comidas2.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ComidasComponent,
    Comidas2Component,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FrappeComponent,
    AntaresComponent,
    LoadingSpinnerComponent,
    FlechaIzquierdaComponent,
    DataPostComponent,
    CategoriasPipe,
    FilterPipe,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
