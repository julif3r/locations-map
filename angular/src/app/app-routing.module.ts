import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateLocationComponent } from './components/create-location/create-location.component';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { ViewLocationComponent } from './components/view-location/view-location.component';
import { NoUserGuard } from './guards/noUser.guard';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, canActivate: [ NoUserGuard ]
  },
  {
    path: 'locations', component: ListLocationComponent, canActivate: [ UserGuard ]
  },
  {
    path: 'create-location', component: CreateLocationComponent, canActivate: [ UserGuard ]
  },
  {
    path: 'location/:id', component: ViewLocationComponent, canActivate: [ UserGuard ]
  },
  {
    path: 'update-location/:id', component: UpdateLocationComponent, canActivate: [ UserGuard ]
  },
  { path: '', redirectTo: 'login' , pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
