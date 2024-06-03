import { Component } from '@angular/core';
import { PetsCarouselComponent } from './pets-carousel/pets-carousel.component';

@Component({
  selector: 'app-shelter',
  standalone: true,
  imports: [PetsCarouselComponent],
  templateUrl: './shelter.component.html',
  styleUrl: './shelter.component.css'
})
export class ShelterComponent {

}
