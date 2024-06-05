import { PetCharacteristic } from "./petCharacteristics";
import { PetHealthDetail } from "./petHealthDetails";
import { PetSpecialRequirement } from "./petSpecialRequirements";
import { Shelter } from "../shelter/shelter";
import { PetDetails } from "./petDetails";


export interface Pet {
    name: string,
    petDetails: PetDetails,
    characteristics: PetCharacteristic[],
    healthDetails: PetHealthDetail[],
    specialRequirements: PetSpecialRequirement[],
    shelter: Shelter,
    imageURL: string,
}