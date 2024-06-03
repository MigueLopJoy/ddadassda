import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ShelterComponent } from './components/pages/shelter/shelter.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'shelter', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'mascotas', 
        loadChildren: () => import("./components/pages/petsearch/petsearch.routes").then(c => c.PETS_ROUTES)
    },
    {
        path: 'shelter', component: ShelterComponent
    }
];
