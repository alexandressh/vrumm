import { AuthService } from './../login/auth.service';
import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService : AuthService, private router : Router) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if(!this.authService.isUserAuthenticated()) {
      this.router.navigate(['/login']);
    }

    return this.authService.isUserAuthenticated();
  }
}
