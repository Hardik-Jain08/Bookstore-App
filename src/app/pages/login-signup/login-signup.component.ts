import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  constructor(private router: Router){}
  check: boolean = (this.router.url === '/login') ? true : false;
  toggle1(){
    this.check=true;
  }
  toggle2(){
    this.check=false;
  }
}
