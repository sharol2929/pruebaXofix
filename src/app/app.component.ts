import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userloginOn:boolean=false;
  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn)=>{
          this.userloginOn=userLoginOn;
        }
      }
    )
  }
  title = 'login-front';
}
