import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {

  private userAuthenticated : boolean = false;
  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router : Router) { }

  doLogin(user : User) {
      if(user.name === "HenriqueAlexandre" && user.password === "123") {
          this.userAuthenticated = true;
          this.router.navigate(['/home']);
          this.showMenuEmmiter.emit(true)
      } else {
        this.showMenuEmmiter.emit(false);
      }
  }

  isUserAuthenticated() {
    //return this.userAuthenticated;
    return true;
  }

}
