import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../../../../../shared/checkbox/checkbox.component';
import { ClickOutsideDirective } from '../../../../../../core/directives/click-outside/click-outside.directive';
import { DogBreed } from '../../../../../../core/model/pets/dogBreeds';
import { CatBreed } from '../../../../../../core/model/pets/catBreeds';
import { AnimalType } from '../../../../../../core/model/pets/animalTypes';
import { NgClass } from '@angular/common';
import { SelectInputComponent } from '../../../../../shared/select-input/select-input.component';

@Component({
  selector: 'app-breed-selector',
  standalone: true,
  imports: [CheckboxComponent, SelectInputComponent],
  templateUrl: './breed-selector.component.html',
  styleUrl: './breed-selector.component.css'
})
export class BreedSelectorComponent {

  constructor() {}

  @Input() animalType: AnimalType | null = null;
  @Output() breeds: EventEmitter<string[]> = new EventEmitter<string[]>;
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
  catBreeds: string[] = [
    "Azul ruso",
    "Bengalí",
    "Bosque de noruega",
    "Común europeo", 
    "Egipcio",
    "Persa",
    "Siamés",
    "Siberiano"
  ];

  selectedBreeds!: string[];

  isAnimalTypeChosen(): boolean {
    return !this.animalType ? false : true;
  }

  onBreedsReceived(breeds: string[]): void {
    this.selectedBreeds = breeds;
    this.breeds.emit(breeds);
  }
}
