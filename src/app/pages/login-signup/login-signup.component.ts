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
  toggle(route: string) {
    if (route === this.router.url.substring(1)) return;
  
    if (route === 'signup') {
      this.router.navigate(['/signup']);
      this.check = true;
    } else {
      this.router.navigate(['/login']);
      this.check = false;
    }
  }  
}
