import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { Articulo1Component } from './components/articulos/articulo1/articulo1.component';
import { Articulo2Component } from './components/articulos/articulo2/articulo2.component';
import { Articulo3Component } from './components/articulos/articulo3/articulo3.component';
import { Articulo4Component } from './components/articulos/articulo4/articulo4.component';
import { Articulo5Component } from './components/articulos/articulo5/articulo5.component';
import { Articulo6Component } from './components/articulos/articulo6/articulo6.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    HeaderComponent,
    FooterComponent,
    GaleriaComponent,
    FormularioComponent,
    TablaComponent,
    InicioComponent,
    Articulo1Component,
    Articulo2Component,
    Articulo3Component,
    Articulo4Component,
    Articulo5Component,
    Articulo6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
