import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleErrorService } from '../handleError/handle-error.service';
import { Location } from './../../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private serverUrl = 'http://localhost:5000/api/locations';

  constructor(private http: HttpClient, private handleErrorService: HandleErrorService) { }

  public getAllLocations(): Observable<Location[]>{
    return this.http.get<Location[]>(this.serverUrl, { responseType: 'json' })
                    .pipe( catchError( this.handleErrorService.handleError<Location[]>('Fetch all locations', []) ));
  }

  public getLocationById(id: string): Observable<Location>{
    return this.http.get<Location>(this.serverUrl + '/' + id, { responseType: 'json'})
                    .pipe( catchError( this.handleErrorService.handleError<Location>('Fetch all locations', null) ));
  }

  public createLocation(location: Location): Observable<any>{
    const headers = { 'content-type':'application/json'};
    const body = JSON.stringify(location);
    return this.http.post(this.serverUrl, body, { headers: headers, responseType: 'text' })
                    .pipe(  catchError( this.handleErrorService.handleError<any>('Update location', []) ) );
  }

  public updateLocation(id: string, location: Partial<Location>): Observable<any>{
    const headers = { 'content-type':'application/json'};
    const body = JSON.stringify(location);
    return this.http.patch(this.serverUrl + '/' + id, body, { headers: headers, responseType: 'text' })
                    .pipe(  catchError( this.handleErrorService.handleError<any>('Update location', []) ) );
  } 

  public deleteLocation(id: string): Observable<any>{
    const headers = { 'content-type':'application/json'};
    return this.http.delete(this.serverUrl + '/' + id, { headers: headers })
                    .pipe( catchError( this.handleErrorService.handleError<any>('Delete location', [])) );
  }

}
