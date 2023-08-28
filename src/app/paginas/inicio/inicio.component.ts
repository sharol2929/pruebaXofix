import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  userloginOn:boolean=false;
  userdata?:User;
  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn)=>{
          this.userloginOn=userLoginOn;
        }
      }),

      this.loginService.currentUserData.subscribe(
        {
          next:(userData)=>{
            this.userdata=userData;
          }
      })
  }

}
