import { Routes } from '@angular/router';
import { CityListComponent } from './cities/city-list/city-list.component';
import { NewCityComponent } from './cities/new-city/new-city.component';

export const routes: Routes = [
    {path: '', redirectTo: 'cities', pathMatch: 'full'},
    {path: 'cities', component: CityListComponent},
    {path: 'cities/new', component: NewCityComponent}
];
