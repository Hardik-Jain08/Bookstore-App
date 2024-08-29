import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator()]]
    });
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.value;
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
      const hasAlphabet = /[a-zA-Z]+/.test(password);
      const hasNumber = /\d+/.test(password);

      if (!hasSpecialChar || !hasAlphabet || !hasNumber) {
        return { invalidPassword: true };
      }

      return null;
    };
  }
  onsubmit() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (res: any) => {
          if (res.result) {
            localStorage.setItem('accessToken', res.result.accessToken);
          }
           else if (res.message === 'please enter valid password') {
            this.setCustomError('password', 'incorrect', true);
          } 
          else {
            this.setCustomError('email', 'incorrect', true);
          }
        }
      )
    }
  }

  setCustomError(controlName: string, errorName: string, errorValue: boolean) {
    const control = this.loginForm.get(controlName);
    if (control) {
      control.setErrors({ [errorName]: errorValue });
    }
  }
}
