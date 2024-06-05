import { AnimalType } from "./animalTypes"
import { CatBreed } from "./catBreeds"
import { DogBreed } from "./dogBreeds"
import { Sex } from "./sex"
import { Shelter } from "../shelter/shelter"
import { PetHealthDetail } from "./petHealthDetails"

export interface PetSearchRquest {
    animalType: AnimalType | null,
    sex: Sex | null
    age: number | null,
    breed: DogBreed | CatBreed | null,
    healthDetails: PetHealthDetail[] | null,
    shelter: Shelter | null
}