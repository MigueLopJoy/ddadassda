import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PetHealthDetail } from '../../../../core/model/interfaces/pets/petHealthDetails';

@Component({
  selector: 'app-pet-health-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pet-health-details.component.html',
  styleUrl: './pet-health-details.component.css'
})
export class PetHealthDetailsComponent {

  petHealthDetails: PetHealthDetail[] = [
    "Cuidado constante del pelaje",
    "Productos específicos para piel y pelaje"
  ]

  isLastElement(element: PetHealthDetail) {
    return !(this.petHealthDetails.indexOf(element) < (this.petHealthDetails.length - 1))
  }
}
