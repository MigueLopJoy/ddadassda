import { Component } from '@angular/core';

@Component({
  selector: 'app-filters-form',
  standalone: true,
  imports: [],
  templateUrl: './filters-form.component.html',
  styleUrl: './filters-form.component.css'
})
export class FiltersFormComponent {

  animalType!: string;

  selectAnimal(animalType: string) {
    this.animalType = animalType;
  }

}
