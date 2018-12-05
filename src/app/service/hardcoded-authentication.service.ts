import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(UserName, Password) {
    console.log('Before '+this.isUserLoggedIn())
    if(UserName === 'decodingjourney' && Password === 'dreaming') {
      sessionStorage.setItem('suthenticatedUser', UserName);
      console.log('After '+this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
   let user = sessionStorage.getItem('suthenticatedUser');
   return !(user === null)
  }
}
