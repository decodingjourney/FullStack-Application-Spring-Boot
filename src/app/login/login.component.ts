import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router : Router) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log('UserName :'+this.UserName);
    // console.log('Password :'+this.Password);
    if(this.UserName === 'decodingjourney' && this.Password === 'dreaming') {
      this.router.navigate(['welcome', this.UserName])
      this.invalidLogin = false;
    }else {
      this.invalidLogin = true;
    }
  }

}
