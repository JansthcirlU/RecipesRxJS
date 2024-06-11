import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes$: Observable<Recipe[]> = of([
    { 
      name: 'Spaghetti Carbonara', 
      category: ['Main'], 
      ingredients: ['spaghetti', 'eggs', 'pancetta', 'parmesan', 'pepper'], 
      steps: ['Boil pasta', 'Cook pancetta', 'Mix eggs and cheese', 'Combine all with pasta'] 
    },
    { 
      name: 'Chocolate Cake', 
      category: ['Dessert'], 
      ingredients: ['flour', 'sugar', 'cocoa powder', 'baking powder', 'eggs', 'milk', 'butter'], 
      steps: ['Preheat oven', 'Mix dry ingredients', 'Add wet ingredients', 'Bake in oven'] 
    },
    { 
      name: 'Bruschetta', 
      category: ['Appetizer'], 
      ingredients: ['bread', 'tomatoes', 'basil', 'olive oil', 'garlic'], 
      steps: ['Toast bread', 'Chop tomatoes and basil', 'Mix with olive oil and garlic', 'Top bread with mixture'] 
    },
    { 
      name: 'Caesar Salad', 
      category: ['Appetizer'], 
      ingredients: ['romaine lettuce', 'croutons', 'parmesan', 'Caesar dressing'], 
      steps: ['Chop lettuce', 'Add croutons and parmesan', 'Toss with dressing'] 
    },
    { 
      name: 'Beef Stew', 
      category: ['Main'], 
      ingredients: ['beef', 'potatoes', 'carrots', 'onions', 'beef broth'], 
      steps: ['Brown beef', 'Add vegetables and broth', 'Simmer until tender'] 
    },
  ]);

  filteredRecipes$: Observable<Recipe[]> = this.recipes$.pipe(
    map(recipes => recipes.filter(recipe => this.filterRecipe(recipe))));

  private keyword : string = '';
  private category : string = '';
  private ingredient : string = '';

  constructor() { }

  public filterRecipe(recipe: Recipe): boolean {
    return recipe.name.includes(this.keyword) || 
      recipe.ingredients.some(ingredient => ingredient.includes(this.keyword)) ||
      recipe.steps.some(step => step.includes(this.keyword)) ||
      recipe.category.some(cat => cat === this.category) ||
      recipe.ingredients.includes(this.ingredient);
  }

  public filterOnKeyword(keyword: string): void {
    this.keyword = keyword;
  }

  public filterOnCategory(category: string): void {
    this.category = category;
  }

  public filterOnIngredient(ingredient: string): void {
    this.ingredient = ingredient;
  }

  public reset(): void {
    
  }
  


}
