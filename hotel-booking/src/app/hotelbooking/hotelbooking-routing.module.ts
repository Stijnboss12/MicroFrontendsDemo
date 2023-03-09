import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';

const HOTEL_ROUTES: Routes = [
  {
    path: '',
    component: HotelBookingComponent,
  },
  {
    path: 'search',
    component: HotelSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(HOTEL_ROUTES)],
  exports: [RouterModule],
})
export class HotelBookingRoutingModule {}