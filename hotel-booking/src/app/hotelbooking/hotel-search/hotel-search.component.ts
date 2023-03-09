import { Component, Input } from '@angular/core';
import { SearchModel } from '../searchmodel';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css']
})
export class HotelSearchComponent {
@Input() searchModel: SearchModel = {country: '', city: ''};

Search(): void {
  window.alert(`You searched for hotels in ${this.searchModel.city}, ${this.searchModel.country}`)
  this.searchModel = {country: '', city: ''};
}
}
