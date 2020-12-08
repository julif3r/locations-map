import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateLocationComponent } from './components/create-location/create-location.component';
import { ListLocationComponent } from './components/list-location/list-location.component';
import { UpdateLocationComponent } from './components/update-location/update-location.component';
import { ViewLocationComponent } from './components/view-location/view-location.component';

const routes: Routes = [
  {
    path: 'locations', component: ListLocationComponent,
  },
  {
    path: 'create-location', component: CreateLocationComponent,
  },
  {
    path: 'location/:id', component: ViewLocationComponent,
  },
  {
    path: 'update-location/:id', component: UpdateLocationComponent,
  },
  { path: '', redirectTo: 'locations', pathMatch: 'full' },
  { path: '**', redirectTo: 'locations' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
