import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'hotelbooking',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfdemohotelbooking.azurewebsites.net/remoteEntry.js',
        exposedModule: './Module',
      }).then(m => m.HotelBookingModule)
  },
  {
    path: 'flightbooking',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfdemoflightbooking.azurewebsites.net/remoteEntry.js',
        exposedModule: './Module',
      }).then(m => m.FlightBookingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
