import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoUserGuard implements CanActivate {

  constructor(private router: Router){ }

  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);

    if(currentUser){
        this.router.navigate(['/locations']);
        return false;
    }
    return true;
  }
  
}
