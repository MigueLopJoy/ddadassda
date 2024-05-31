import { Component } from '@angular/core';
import { CheckboxComponent } from '../../../../shared/checkbox/checkbox.component';
import { BreedSelectorComponent } from './breed-selector/breed-selector.component';

@Component({
  selector: 'app-filters-form',
  standalone: true,
  imports: [CheckboxComponent, BreedSelectorComponent],
  templateUrl: './filters-form.component.html',
  styleUrl: './filters-form.component.css'
})
export class FiltersFormComponent {

  animalType!: string;
  sex!: number;

  selectAnimal(animalType: string) {
    this.animalType = animalType;
  }

  selectSex(sex: number) {
    this.sex = sex;
  }
}
