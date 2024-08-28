import { Component } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl} from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.signupForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator()]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), this.phoneNumberValidator()]]
    });
  }
  get fullName() {
    return this.signupForm.get('fullName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get phone() {
    return this.signupForm.get('phone');
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
  phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const phoneNumber = control.value.toString(); 
      const pattern = /^[6789]\d*$/;
      if (!pattern.test(phoneNumber)) {
        return { invalidPhoneNumber: true };
      }
      return null;
    };
  }
  onsubmit() {
    if(this.signupForm.valid) {
      const formValues = { ...this.signupForm.value, phoneNumber: this.signupForm.value.phone.toString() };
      this.userService.signup(formValues).subscribe(
        (res: any) => {
          console.log('Response:', res);
        }, (error:any)=>{
          console.error('Error:', error); 
        }
      )
    }
  }
  setCustomError(controlName: string, errorName: string, errorValue: boolean) {
    const control = this.signupForm.get(controlName);
    if (control) {
      control.setErrors({ [errorName]: errorValue });
    }
  }
}
