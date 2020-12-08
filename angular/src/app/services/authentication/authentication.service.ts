import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { HandleErrorService } from '../handleError/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private serverUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient, private handleErrorService: HandleErrorService) { }

  private loginPost(user: User): Observable<any> {
    const headers = { 'content-type':'application/json'};
    return this.http.post<any>(this.serverUrl + '/login', user, { headers: headers, responseType: 'json' } )
                    .pipe(  catchError( this.handleErrorService.handleError<any>('Update location', []) ) );
  }

  public async login(user: User): Promise<any> {
    const result = await this.loginPost(user).toPromise();

    if ( result.user ) {
      console.log(result);
      localStorage.setItem('currentUser', JSON.stringify(result));
      const body = document.getElementById('body') as HTMLElement;
      body.classList.add('logged-in');
    }
    return result;
  }

  public logout(){
    localStorage.removeItem('currentUser');
    const body = document.getElementById('body') as HTMLElement;
    body.classList.remove('logged-in');
  }
}
