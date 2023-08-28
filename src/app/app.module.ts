import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './shared/encabezado/encabezado.component';
import { PiePaginaComponent } from './shared/pie-pagina/pie-pagina.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CrearCuentaComponent } from './paginas/crear-cuenta/crear-cuenta.component';
import { GestionContrasenasComponent } from './paginas/gestion-contrasenas/gestion-contrasenas.component';
import { GestionAccesosComponent } from './paginas/gestion-accesos/gestion-accesos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    InicioComponent,
    LoginComponent,
    NavbarComponent,
    CrearCuentaComponent,
    GestionContrasenasComponent,
    GestionAccesosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
