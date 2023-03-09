import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightBookingRoutingModule } from './flightbooking-routing.module';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FlightBookingComponent, FlightSearchComponent],
  imports: [CommonModule, FormsModule, FlightBookingRoutingModule],
})
export class FlightBookingModule {}
