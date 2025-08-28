import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');

      console.log(token)

      if (!token) {
        return this.router.createUrlTree(['/login']);
      }
      return true
    }

    return this.router.createUrlTree(['/login']);
  }
}
