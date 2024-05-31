import { Routes } from "@angular/router";
import { PetsearchComponent } from "./petsearch.component";
import { PetDetailsComponent } from "../pet-details/pet-details.component";

export const PETS_ROUTES: Routes = [
    {
        path: '', redirectTo: 'mascotas', pathMatch: 'full'
    },
    {
        path: 'mascotas', component: PetsearchComponent
    }, 
    {
        path: 'mascotas/:slug', component: PetDetailsComponent
    }
];
