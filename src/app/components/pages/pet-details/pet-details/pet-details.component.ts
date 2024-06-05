import { Component, Input } from '@angular/core';
import { PetDetails } from '../../../../core/model/pets/petDetails';
import { AgeFormatPipe } from '../../../../core/pipes/age-format/age-format.pipe';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [AgeFormatPipe],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  @Input() petDetails!: PetDetails;
  @Input() petName!: string;

}

