import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';

const FLIGHT_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
  },
  {
    path: 'search',
    component: FlightSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(FLIGHT_ROUTES)],
  exports: [RouterModule],
})
export class FlightBookingRoutingModule {}
