import { Component, Input } from '@angular/core';
import { Shelter } from '../../../../core/model/shelter/shelter';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapComponent } from '../../../shared/google-map/google-map.component';

@Component({
  selector: 'app-pet-location-card',
  standalone: true,
  imports: [GoogleMapsModule, GoogleMapComponent],
  templateUrl: './pet-location-card.component.html',
  styleUrl: './pet-location-card.component.css'
})
export class PetLocationCardComponent {

  @Input() shelter!: Shelter;

  constructor() { }


}
