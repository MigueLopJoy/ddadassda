import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PetDetailsComponent } from './components/pages/pet-details/pet-details.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'mascotas', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'mascotas', 
        component: PetDetailsComponent
        // loadChildren: () => import("./components/pages/petsearch/petsearch.routes").then(c => c.PETS_ROUTES)
    }
];
