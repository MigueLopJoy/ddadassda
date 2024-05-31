import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../../../../shared/checkbox/checkbox.component';

@Component({
  selector: 'app-breed-selector',
  standalone: true,
  imports: [FormsModule, CheckboxComponent],
  templateUrl: './breed-selector.component.html',
  styleUrl: './breed-selector.component.css'
})
export class BreedSelectorComponent {

  searchText: string = "";
  selectedBreeds: string[] = [];
  filteredBreeds: string[] = [];
  dogBreeds: string[] = [
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

  onSearchChange(searchValue: string) {
    const normalizedSearchValue = this.normalizeString(searchValue);
    this.filteredBreeds = this.dogBreeds.filter(breed => {
      console.log(this.normalizeString(breed))
      console.log(this.normalizeString(breed).includes(normalizedSearchValue))
      return this.normalizeString(breed).includes(normalizedSearchValue);
    })  
    
  }

  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

}
