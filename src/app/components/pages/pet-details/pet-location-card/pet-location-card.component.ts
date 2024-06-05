import { Component, Input } from '@angular/core';
import { Shelter } from '../../../../core/model/shelter/shelter';
import { GoogleMapsModule } from '@angular/google-maps';
import { Loader } from '@googlemaps/js-api-loader';
import { Address } from '../../../../core/model/shelter/address';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-location-card',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './pet-location-card.component.html',
  styleUrl: './pet-location-card.component.css'
})
export class PetLocationCardComponent {

  @Input() shelter!: Shelter;

  constructor() { }

  map!: google.maps.Map;
  service!: google.maps.places.PlacesService;
  infowindow!: google.maps.InfoWindow;
  
  initMap(): void {
    const sydney = new google.maps.LatLng(-33.867, 151.195);
  
    this.infowindow = new google.maps.InfoWindow();
  
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: sydney,
      zoom: 15,
    });
  
    const request = {
      query: "Museum of Contemporary Art Australia",
      fields: ["name", "geometry"],
    };
  
    this.service = new google.maps.places.PlacesService(this.map);
  
    this.service.findPlaceFromQuery(
      request,
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          for (let i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
  
          this.map.setCenter(results[0].geometry!.location!);
        }
      }
    );
  }
  
  createMarker(place: google.maps.places.PlaceResult) {
    if (!place.geometry || !place.geometry.location) return;
  
    const map = this.map

    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
    });
  
    google.maps.event.addListener(marker, "click", () => {
      this.infowindow.setContent(place.name || "");
      this.infowindow.open(this.map);
    });
  }
  
  ngOnInit() {
    this.initMap();
  }
}
