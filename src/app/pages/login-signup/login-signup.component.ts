import { Component } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  check: boolean = true;
  toggle1(){
    this.check=true;
  }
  toggle2(){
    this.check=false;
  }
}
