import { CatBreed } from "../../types/catBreeds";
import { DogBreed } from "../../types/dogBreeds";
import { PetCharacteristic } from "./petCharacteristics";
import { PetHealthDetail } from "./petHealthDetails";
import { PetSpecialRequirement } from "./petSpecialRequirements";
import { Sex } from "../../types/sex";
import { Shelter } from "../shelter";
import { AnimalType } from "../../types/animalTypes";

export interface Pets {
    animalType: AnimalType,
    sex: Sex
    name: string,
    age: number,
    breed: DogBreed | CatBreed | null,
    characteristics: PetCharacteristic[],
    healthDetails: PetHealthDetail[],
    specialRequirements: PetSpecialRequirement[],
    shelter: Shelter
}