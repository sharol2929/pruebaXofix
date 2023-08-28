import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { CrearCuentaComponent } from './paginas/crear-cuenta/crear-cuenta.component';
import { GestionContrasenasComponent } from './paginas/gestion-contrasenas/gestion-contrasenas.component';
import { GestionAccesosComponent } from './paginas/gestion-accesos/gestion-accesos.component';

const routes: Routes = [
  {path:'',redirectTo:'/iniciar-seccion', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'iniciar-seccion', component:LoginComponent},
  {path:'crear-cuenta',component:CrearCuentaComponent},
  {path:'gestion-contrasenas', component:GestionContrasenasComponent},
  {path:'gestion-acceso', component:GestionAccesosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
