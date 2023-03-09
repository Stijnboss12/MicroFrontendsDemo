import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/flightbooking',
    pathMatch: 'full'
  },
  {
    path: 'flightbooking',
    loadChildren: () =>
      import('./flightbooking/flightbooking.module').then(
        (m) => m.FlightBookingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
