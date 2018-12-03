import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName = 'decodingjourney'
  Password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log('UserName :'+this.UserName);
    // console.log('Password :'+this.Password);
    if(this.UserName === 'decodingjourney' && this.Password === 'dreaming') {
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
  }

}
