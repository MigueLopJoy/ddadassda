import { Routes } from "@angular/router";
import { PetsearchComponent } from "./petsearch.component";
import { PetInfoComponent } from "../pet-details/pet-info.component";

export const PETS_ROUTES: Routes = [
    {
        path: '', component: PetsearchComponent
    }, 
    {
        path: 'mascota', component: PetInfoComponent
    }
];
