import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {

  constructor(private formBuild:FormBuilder){
  }

  inicioerror:string="";
  crearform=this.formBuild.group({
    usuario:['',[Validators.required]],
    correo:['',[Validators.required, Validators.email]],
    contraseña:['',[Validators.required, Validators.minLength(8)]],
    contraseña2:['',[Validators.required, Validators.minLength(8)]],
    nombre:['',[Validators.required,]],
    apellido:['',[Validators.required,]],
    genero:['',[Validators.required]],
    fecha:['', Validators.required]

  })
  get nombreNoValido(){
    return this.crearform.get('usuario')?.invalid && this.crearform.get('usuario')?.touched;
  } 
  get correoNoValido(){
    return this.crearform.get('correo')?.invalid && this.crearform.get('correo')?.touched;
  }
  get contrasenaNoValido(){
    return this.crearform.get('contraseña')?.invalid && this.crearform.get('contraseña')?.touched;
  }   
  get contrasena2NoValido(){
    return this.crearform.get('contraseña2')?.invalid && this.crearform.get('contraseña2')?.touched;
  }  
  get nameNoValido(){
    return this.crearform.get('nombre')?.invalid && this.crearform.get('nombre')?.touched;
  }  
  get apellidoNoValido(){
    return this.crearform.get('apellido')?.invalid && this.crearform.get('apellido')?.touched;
  }  
  get fechaNoValido(){
    return this.crearform.get('genero')?.invalid && this.crearform.get('genero')?.touched;
  }
  
  
  
  
}
