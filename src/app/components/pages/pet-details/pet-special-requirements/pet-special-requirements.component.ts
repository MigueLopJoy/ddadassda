import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PetSpecialRequirement } from '../../../../core/model/pets/petSpecialRequirements';

@Component({
  selector: 'app-pet-special-requirements',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pet-special-requirements.component.html',
  styleUrl: './pet-special-requirements.component.css'
})
export class PetSpecialRequirementsComponent {

  @Input() petSpecialRequirements!: PetSpecialRequirement[];

  isLastElement(element: PetSpecialRequirement) {
    return !(this.petSpecialRequirements.indexOf(element) < (this.petSpecialRequirements.length - 1))
  }
}
