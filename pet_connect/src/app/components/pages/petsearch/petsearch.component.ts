import { Component } from '@angular/core';
import { FiltersWindowComponent } from './filters-window/filters-window.component';
import { PetCardComponent } from '../../shared/pet-card/pet-card.component';

@Component({
  selector: 'app-petsearch',
  standalone: true,
  imports: [FiltersWindowComponent, PetCardComponent],
  templateUrl: './petsearch.component.html',
  styleUrl: './petsearch.component.css'
})
export class PetsearchComponent {
  showFiltersWindow: boolean = false;
  

  toggleFiltersWindow() {
    this.showFiltersWindow = !this.showFiltersWindow;
  }
}
