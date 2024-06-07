import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ShelterComponent } from './components/pages/shelter/shelter.component';
import { GeoAPIComponent } from './geo-api/geo-api.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
    },
    {
        path: 'inicio', component: GeoAPIComponent
    },
    {
        path: 'mascotas', 
        loadChildren: () => import("./components/pages/petsearch/petsearch.routes").then(c => c.PETS_ROUTES)
    },
    {
        path: 'asociaciones', component: ShelterComponent    
    },
    {
        path: 'auth', 
        loadChildren: () => import("./components/pages/auth/auth.routes").then(c => c.AUTH_ROUTES)
    }
];
