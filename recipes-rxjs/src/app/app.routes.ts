import { Routes } from '@angular/router';
import { RecipeCreationComponent } from './components/recipe-creation/recipe-creation.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'create', component: RecipeCreationComponent },
];
