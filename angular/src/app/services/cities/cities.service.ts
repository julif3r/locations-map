import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { City } from 'src/app/models/cities';
import { HandleErrorService } from '../handleError/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private serverUrl = 'http://localhost:5000/cities';

  constructor(private http: HttpClient, private handleErrorService: HandleErrorService) { }

  public getAllCities(): Observable<City[]>{
    return this.http.get<City[]>(this.serverUrl, { responseType: 'json' })
                    .pipe( 
                        tap( (response) => console.log(`Fetch all cities from ${this.serverUrl}`, response) ),
                        catchError( this.handleErrorService.handleError<City[]>('Fetch all cities', []) )
                    );
  }

}
