import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent {

  SendMessage(): void {
    window.alert("You clicked me, greetings from the HotelBooking component!")
  }

}
