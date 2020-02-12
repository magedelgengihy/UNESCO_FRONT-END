import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.userService.isLoggedIn()) {      
      this.router.navigateByUrl('/home');
      this.userService.deleteToken();
      return false;
    }
    else if(JSON.parse(this.userService.getUserFromLocalStorage()).role == 'user') {
      this.router.navigateByUrl('/home');
    }
    return true;
  }

}
