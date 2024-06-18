import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipesFilterComponent } from './components/recipes-filter/recipes-filter.component';

import { RecipeOverviewComponent } from './components/recipe-overview/recipe-overview.component';
import { RecipeCreationComponent } from './components/recipe-creation/recipe-creation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RecipeOverviewComponent,
    RouterOutlet,
    RecipesFilterComponent,
    RecipeCreationComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipes-rxjs';
}
