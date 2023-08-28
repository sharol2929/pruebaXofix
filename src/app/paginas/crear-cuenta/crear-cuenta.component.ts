import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  
  inicioerror:string="";
  crearform=this.formBuild.group({
    usuario:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    contraseña:['',[Validators.required, Validators.minLength(8)]],
    contraseña2:['',[Validators.required, Validators.minLength(8)]],
    nombre:['',[Validators.required,]],
    apellido:['',[Validators.required,]],
    genero:['',[Validators.required]],
    fecha:['', Validators.required]

  })
  constructor(private formBuild:FormBuilder){}
  
  get email(){
    return this.crearform.controls.email;
  } 
  get password(){
    return this.crearform.controls.contraseña;
  } 
}
