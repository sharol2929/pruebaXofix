import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { CrearCuentaComponent } from './paginas/crear-cuenta/crear-cuenta.component';

const routes: Routes = [
  {path:'',redirectTo:'/iniciar-seccion', pathMatch:'full'},
  {path:'inicio', component:InicioComponent},
  {path:'iniciar-seccion', component:LoginComponent},
  {path:'crear-cuenta',component:CrearCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
