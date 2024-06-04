import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { PetSpecialRequirement } from '../../../../core/model/interfaces/pets/petSpecialRequirements';

@Component({
  selector: 'app-pet-special-requirements',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pet-special-requirements.component.html',
  styleUrl: './pet-special-requirements.component.css'
})
export class PetSpecialRequirementsComponent {

  petSpecialRequirements: PetSpecialRequirement[] = [
    "Hogar sin perros",
    "Hogar sin otros animales",
    "Adaptación gradual"
  ];

  isLastElement(element: PetSpecialRequirement) {
    return !(this.petSpecialRequirements.indexOf(element) < (this.petSpecialRequirements.length - 1))
  }
}
