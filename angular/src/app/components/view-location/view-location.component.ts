import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { LocationsService } from 'src/app/services/locations/locations.service';
import { Location } from '../../models/location';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.scss']
})
export class ViewLocationComponent implements OnInit {

  id : string = '';
  location : Location;

  constructor(private route: ActivatedRoute, private locationsService: LocationsService) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.getLocationById(this.id);
  }

  async getLocationById(id: string){
    this.location = await this.locationsService.getLocationById(id).toPromise();
  }

}
