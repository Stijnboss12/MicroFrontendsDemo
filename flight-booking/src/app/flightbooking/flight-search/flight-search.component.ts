import { Component, Input } from '@angular/core';
import { SearchModel } from '../searchmodel';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
@Input() searchModel: SearchModel = {from: '', to: ''};

  Search(): void {
    window.alert(`You searched for flights from ${this.searchModel.from} to ${this.searchModel.to}`)
    this.searchModel = {from: '', to: ''};
  }
}
