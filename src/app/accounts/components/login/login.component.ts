import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {}

  // login(): void {
  //   // this.username = username;
  //   // this.password = password;
  //   console.log('username', this.username);
  //   console.log('passwrod', this.password);
  // }
  login(form: FormGroup) {
    console.log('form', form);
  }
  clearForm(form: FormGroup) {
    form.reset();
    // this.username = '';
    // this.password = '';
  }
}
