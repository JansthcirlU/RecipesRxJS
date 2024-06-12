import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesFilterComponent } from './components/recipes-filter/recipes-filter.component';
import { RecipeOverviewComponent } from './components/recipe-overview/recipe-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RecipeOverviewComponent,
    RouterOutlet, 
    RecipesFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipes-rxjs';
}
