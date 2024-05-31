import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../../../../shared/checkbox/checkbox.component';
import { ClickOutsideDirective } from '../../../../../../core/directives/click-outside/click-outside.directive';

@Component({
  selector: 'app-breed-selector',
  standalone: true,
  imports: [FormsModule, CheckboxComponent, ClickOutsideDirective],
  templateUrl: './breed-selector.component.html',
  styleUrl: './breed-selector.component.css'
})
export class BreedSelectorComponent {

  constructor() {}

  @Output() breeds: EventEmitter<string[]> = new EventEmitter<string[]>;

  isInputFocused: boolean = false;
  searchText: string = "";
  selectedBreeds: string[] = [];
  dogBreeds: string[] = [
    "Todas",
    "Labrador",
    "Golden Retriever",
    "Pastor Alemán",
    "Bulldog Francés",
    "Bulldog Inglés",
    "Caniche",
    "Beagle",
    "Chihuahua",
    "Perro Salchicha",
    "Rottweiler",
    "Yorkshire",
    "Boxer",
    "Doberman",
    "Pug (Carlino)",
    "Cocker",
    "Husky",
    "Border Collie",
    "Schnauzer",
    "Gran Danés",
    "San Bernardo",
    "Akita Inu",
    "Dálmata",
    "Shiba Inu",
    "Pomerania",
    "Pastor Australiano",
    "Bichon Maltés",
    "Boston Terrier",
    "Saboyedo",
    "Galgo",
    "Mastín",
    "Podenco",
    "Basset Hound",
    "Alaskan Malamute",
    "Terranova",
    "Pit Bull",
    "American Stanford",
    "Bull Terrier",
    "Boyero de Berna"
  ];
  filteredBreeds: string[] = this.dogBreeds;


  onSearchChange(searchValue: string) {
    const normalizedSearchValue = this.normalizeString(searchValue);
    this.filteredBreeds = this.dogBreeds.filter(breed => {
      return this.normalizeString(breed).includes(normalizedSearchValue);
    })  
  }

  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  toggleBreedCheck(selected: boolean, breed: string) {
    if (breed === 'Todas') {
      this.filteredBreeds = this.dogBreeds;
    } else {
      if (selected) this.selectedBreeds.push(breed);
      else {
        let breedIndex = this.selectedBreeds.indexOf(breed);
        if (breedIndex > -1) {
          console.log(breedIndex)
          this.selectedBreeds.splice(breedIndex, 1)
        }
      }
    }
    this.breeds.emit(this.selectedBreeds);
  }

  showDropDown() {
    this.isInputFocused = true;
  }

  onClickedOutside() {
    this.isInputFocused = false;
  }

}
