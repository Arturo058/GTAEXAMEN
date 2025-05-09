import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { HistoriaComponent } from './historia/historia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'personajes', 
    component: PersonajesComponent 
  },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: '**', redirectTo: '' } // Ruta comodín (para errores 404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }