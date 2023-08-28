import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { LoginService } from 'src/app/services/auth/login.service';
import { Loginrequest } from 'src/app/services/auth/loginrequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginerror:string="";
  loginform=this.formBuild.group({
    email:['',[Validators.required, Validators.email]],
    password:['', Validators.required]

  })

  constructor(private formBuild:FormBuilder, private router:Router, private loginservice:LoginService){}
  
  get email(){
    return this.loginform.controls.email;
  } 
  get password(){
    return this.loginform.controls.password;
  } 
  
  ngOnInit(): void {
    
  }

  login(){
    if(this.loginform.valid){
      this.loginservice.login(this.loginform.value as Loginrequest).subscribe({
        next: (UserData) =>{
          console.log(UserData);
        },
        error: (errorData)=>{
          console.error(errorData);
          this.loginerror=errorData;
        },
        complete: ()=>{
          console.info('Login complete')
          this.router.navigateByUrl('/inicio');
          this.loginform.reset();
        }
      });
      
    }else{
      this.loginform.markAllAsTouched();
      alert("algo falta")
    }
  }
}
