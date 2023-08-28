import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {

  constructor(private formBuild:FormBuilder, private router:Router){
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

  },{
    Validators:this.contrasenasIguales('contraseña','contraseña2')
  }
  
  )
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
  
  crear(){
    this.passnovalido;
    if (this.crearform.invalid){
      return Object.values(this.crearform.controls).forEach(controls=>{
        controls.markAllAsTouched();
      })
    }else{
      this.router.navigateByUrl('/iniciar-seccion');
      this.crearform.reset();
    }
  }

  passnovalido(){
    const pass1 = this.crearform.get('contraseña')?.value;
    const pass2 = this.crearform.get('contraseña2')?.value;

    if(pass1 !== pass2){
      return true;
    }else{
      return false;
    }
  }

  contrasenasIguales(pass1:string, pass2:string){
    return (formgrupo:FormGroup)=>{
      const pass1Control = formgrupo.get(pass1);
      const pass2Control = formgrupo.get(pass2);

      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({noigual:true})
      }
    }
  }
  
  
}
