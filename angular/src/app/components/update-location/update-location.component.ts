import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/cities';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { Location } from '../../models/location';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.scss']
})
export class UpdateLocationComponent implements OnInit {
  id: string;

  form: FormGroup;
  name: FormControl;
  address: FormControl;
  city: FormControl;
  latitude: FormControl;
  longitude: FormControl;

  location: Location;
  cities$: Observable<City[]>;

  constructor(private locationsService: LocationsService, private citiesServices: CitiesService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.location = await this.getLocationById(this.id).toPromise();
    this.cities$ = this.getAllCities();

    if(this.location){
      this.name = new FormControl(this.location.name, Validators.required);
      this.address = new FormControl(this.location.address, Validators.required);
      this.city = new FormControl(this.location.city, Validators.required );
      this.latitude = new FormControl(this.location.latitude, Validators.required );
      this.longitude = new FormControl(this.location.longitude, Validators.required );
  
      this.form = new FormGroup({
        nameControl: this.name,
        addressControl: this.address,
        cityControl: this.city,
        latitudeControl: this.latitude,
        longitudeControl: this.longitude
      });
    }

  }

  getLocationById(id: string): Observable<Location> {
    return this.locationsService.getLocationById(id);
  }

  getAllCities(){
    return this.citiesServices.getAllCities();
  }

  async submit(){
    if(this.form.valid){

      this.location = {
        name: this.name.value,
        address: this.address.value,
        city: this.city.value,
        latitude: this.latitude.value,
        longitude: this.longitude.value
      }
      const result = await this.locationsService.updateLocation(this.id, this.location).toPromise();
      if(result){
        this.router.navigate(['locations']);
      }
    }
  }

}
