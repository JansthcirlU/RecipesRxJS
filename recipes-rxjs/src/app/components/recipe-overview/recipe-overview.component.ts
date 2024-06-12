import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipesService } from '../../service/recipes.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe';
import { CommonModule } from '@angular/common';
import {  MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-recipe-overview',
  standalone: true,
  imports: [
    RecipeCardComponent,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './recipe-overview.component.html',
  styleUrl: './recipe-overview.component.css'
})
export class RecipeOverviewComponent {

  recipes$ : Observable<Recipe[]>;
  constructor(private recipesService : RecipesService) 
  { 
   this.recipes$ = this.recipesService.filteredRecipes$;
  }

}
