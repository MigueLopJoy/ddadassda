import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PetHealthDetail } from '../../../../core/model/pets/petHealthDetails';

@Component({
  selector: 'app-pet-health-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pet-health-details.component.html',
  styleUrl: './pet-health-details.component.css'
})
export class PetHealthDetailsComponent {

  @Input() petHealthDetails!: PetHealthDetail[];

  isLastElement(element: PetHealthDetail) {
    return !(this.petHealthDetails.indexOf(element) < (this.petHealthDetails.length - 1))
  }
}
