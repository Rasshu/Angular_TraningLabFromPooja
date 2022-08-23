import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  username: string = '';
  password: string = '';
  email: string = '';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor() {}

  ngOnInit(): void {}

  signUp(form: FormGroup): void {
    console.log('form', form);
    console.log('username', form.value.emailFieldControl);
    console.log('passwrod', form.value.passwordFieldControl);
    console.log('email', form.value.emailFieldControl);
  }
  clearForm(form: FormGroup) {
    form.reset();
    // this.username = '';
    // this.password = '';
    // this.email = '';
  }
}
