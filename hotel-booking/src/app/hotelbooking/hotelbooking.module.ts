import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelBookingRoutingModule } from './hotelbooking-routing.module';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HotelBookingComponent, HotelSearchComponent],
  imports: [CommonModule, FormsModule, HotelBookingRoutingModule],
})
export class HotelBookingModule {}
