import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location';
import { Observable } from 'rxjs';
import { LocationsService } from '../../services/locations/locations.service';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss']
})
export class ListLocationComponent implements OnInit {

  locations$: Observable<Location[]>;

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locations$ = this.getAllLocations();
  }

  getAllLocations(): Observable<Location[]> {
    return this.locationsService.getAllLocations();
  }

  async deleteItem(id: string) {
    if(window.confirm('Are you sure')){
      const result = await this.locationsService.deleteLocation(id).toPromise();
      this.locations$ = this.getAllLocations();
    }
    
  }

}
