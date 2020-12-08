import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    //this.login(this.user);
    this.username = new FormControl('', Validators.required );
    this.password = new FormControl('', Validators.required );

    this.loginForm = new FormGroup({
      usernameControl: this.username,
      passwordControl: this.password
    });
  }

  login(user: User){
    return this.authService.login(user);
  }

  async submit(user: User){
    if(this.loginForm.valid){
      const user: User = {
        username: this.username.value,
        password: this.password.value
      }
      const result = await this.authService.login(user);
      console.log(result);
      if(result){
        this.router.navigate(['/locations']);
      }
    }
  }

}
