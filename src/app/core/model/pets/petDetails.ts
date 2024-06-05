import { AnimalType } from "./animalTypes";
import { CatBreed } from "./catBreeds";
import { DogBreed } from "./dogBreeds";
import { Sex } from "./sex";
import { Size } from "./size";

export interface PetDetails {
    animalType: AnimalType,
    sex: Sex
    age: number,
    size: Size,
    breed: DogBreed | CatBreed | null,
}