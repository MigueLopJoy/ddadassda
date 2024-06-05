import { Component, Input } from '@angular/core';
import { PetDetails } from '../../../../core/model/pets/petDetails';
import { ObjectEntriesPipe } from '../../../../core/pipes/object-entries/object-entries.pipe';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [ObjectEntriesPipe],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  @Input() petDetails!: PetDetails;
  @Input() petName!: string;

  getPetDetailsWithoutAnimalType(details: PetDetails) {
    const {animalType, ...rest} = details;
    return rest;
  }
}

