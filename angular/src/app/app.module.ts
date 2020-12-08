import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLocationComponent } from './components/create-location/create-location.component';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { ViewLocationComponent } from './components/view-location/view-location.component';
import { LocationsService } from './services/locations/locations.service';
import { HandleErrorService } from './services/handleError/handle-error.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { AgmCoreModule } from '@agm/core';
import { CitiesService } from './services/cities/cities.service';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from './interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CreateLocationComponent,
    ListLocationComponent,
    ViewLocationComponent,
    UpdateLocationComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQSDP5EPFThMdkAdiUPsXAdtfaVobUwZs'
    }),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    LocationsService,
    HandleErrorService,
    CitiesService,
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
