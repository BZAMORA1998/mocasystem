import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolucionesComponent } from './soluciones/soluciones.component';


const routes: Routes = [
    {
      path: 'home' , component: HomeComponent 
    },
    {
      path: 'soluciones' , component: SolucionesComponent 
    },
    {
      path: '', redirectTo: 'home', pathMatch: 'full'
    },
    { 
      path: '**', redirectTo: 'home' 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
