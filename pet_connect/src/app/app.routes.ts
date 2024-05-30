import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PetsearchComponent } from './components/pages/petsearch/petsearch.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'buscar-mascota', component: PetsearchComponent
    }
];
