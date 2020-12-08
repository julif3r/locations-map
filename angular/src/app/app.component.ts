import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular';
  currentUser: any;

  constructor(private authService: AuthenticationService,private router: Router) { }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
