import { Component, Input } from '@angular/core';
import { Shelter } from '../../../../core/model/shelter/shelter';

@Component({
  selector: 'app-pet-location-card',
  standalone: true,
  imports: [],
  templateUrl: './pet-location-card.component.html',
  styleUrl: './pet-location-card.component.css'
})
export class PetLocationCardComponent {

  @Input() shelter!: Shelter;
}
