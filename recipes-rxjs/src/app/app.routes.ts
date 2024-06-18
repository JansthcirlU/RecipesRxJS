import { Routes } from '@angular/router';
import { RecipeCreationComponent } from './components/recipe-creation/recipe-creation.component';
import { RecipeMainFrameComponent } from './components/recipe-main-frame/recipe-main-frame.component';

export const routes: Routes = [
  { path: '', component: RecipeMainFrameComponent },
  { path: 'create', component: RecipeCreationComponent },
];
