import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/cities';
import { CitiesService } from 'src/app/services/cities/cities.service';
import { LocationsService } from 'src/app/services/locations/locations.service';
import { Location } from '../../models/location';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.scss']
})
export class CreateLocationComponent implements OnInit {

  formGroup: FormGroup;
  name: FormControl;
  address: FormControl;
  city: FormControl;
  latitude: FormControl;
  longitude: FormControl;

  location: Location;
  cities$: Observable<City[]>

  constructor(private locationsService: LocationsService, private router: Router, private citiesServices: CitiesService) { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.city = new FormControl('', Validators.required );
    this.latitude = new FormControl('', Validators.required );
    this.longitude = new FormControl('', Validators.required );

    this.formGroup = new FormGroup({
      nameControl: this.name,
      addressControl: this.address,
      cityControl: this.city,
      latitudeControl: this.latitude,
      longitudeControl: this.longitude
    });

    this.cities$ = this.getAllCities();
  }

  getAllCities(){
    return this.citiesServices.getAllCities();
  }

  async submit(){
    if(this.formGroup.valid){

      this.location = {
        name: this.name.value,
        address: this.address.value,
        city: this.city.value,
        latitude: this.latitude.value,
        longitude: this.longitude.value
      }
      const result = await this.locationsService.createLocation(this.location).toPromise();
      if(result){
        this.router.navigate(['locations']);
      }
    }
  }

}
