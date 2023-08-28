import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userloginOn:boolean=false;
  userdata?:User;
  constructor(private loginService:LoginService){}
  
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn)=>{
          this.userloginOn=userLoginOn;
        }
      }
    ),
    this.loginService.currentUserData.subscribe(
      {
        next:(userData)=>{
          this.userdata=userData;
        }
    })
  }
  
}
