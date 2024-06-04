import { AnimalType } from "../../types/animalTypes"
import { CatBreed } from "../../types/catBreeds"
import { DogBreed } from "../../types/dogBreeds"
import { Sex } from "../../types/sex"
import { Shelter } from "../shelter"
import { PetHealthDetail } from "./petHealthDetails"

export interface PetSearchRquest {
    animalType: AnimalType | null,
    sex: Sex | null
    age: number | null,
    breed: DogBreed | CatBreed | null,
    healthDetails: PetHealthDetail[] | null,
    shelter: Shelter | null
}