import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';

import { Articulo1Component } from './components/articulos/articulo1/articulo1.component';
import { Articulo2Component } from './components/articulos/articulo2/articulo2.component';
import { Articulo3Component } from './components/articulos/articulo3/articulo3.component';
import { Articulo4Component } from './components/articulos/articulo4/articulo4.component';
import { Articulo5Component } from './components/articulos/articulo5/articulo5.component';
import { Articulo6Component } from './components/articulos/articulo6/articulo6.component';

const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'articulos',component:ArticulosComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'formulario',component:FormularioComponent},
  {path:'tabla',component:TablaComponent},
  {path:'articulos-articulo1',component:Articulo1Component},
  {path:'articulos-articulo2',component:Articulo2Component},
  {path:'articulos-articulo3',component:Articulo3Component},
  {path:'articulos-articulo4',component:Articulo4Component},
  {path:'articulos-articulo5',component:Articulo5Component},
  {path:'articulos-articulo6',component:Articulo6Component},
  {path:'**', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
