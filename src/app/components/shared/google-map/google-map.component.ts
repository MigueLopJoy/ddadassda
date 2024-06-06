import { Component, Input } from '@angular/core';
import { GoogleMapsModule, MapGeocoder } from '@angular/google-maps';
import { Address } from '../../../core/model/shelter/address';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent {

  constructor(
    private geocoder: MapGeocoder
  ) {}

  @Input() address!: Address;
  @Input() height!: number;
  @Input() widht!: number;
  options!: google.maps.MapOptions;
  location!: google.maps.LatLngLiteral;

  getAddressGeolocation() {
    const addressString = `${this.address.postalCode} ${this.address.street} ${this.address.city} ${this.address.province}`;

    this.geocoder.geocode({
      address: addressString
    }).subscribe(({results}) => {
      
      this.location = {
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng()
      }

      this.options = {
        center: this.location,
        zoom: 14 
      }
    }); 
  }

  ngOnInit() {
    this.getAddressGeolocation();
  }
}
