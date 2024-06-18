import { Component } from '@angular/core';
import { RecipesFilterComponent } from '../recipes-filter/recipes-filter.component';
import { RecipeOverviewComponent } from '../recipe-overview/recipe-overview.component';

@Component({
  selector: 'app-recipe-main-frame',
  standalone: true,
  imports: [RecipeOverviewComponent, RecipesFilterComponent],
  templateUrl: './recipe-main-frame.component.html',
  styleUrl: './recipe-main-frame.component.css',
})
export class RecipeMainFrameComponent {}
