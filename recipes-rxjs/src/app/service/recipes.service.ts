import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
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
    steps: ['Boil pasta', 'Cook pancetta', 'Mix eggs and cheese', 'Combine all with pasta'],
    description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
    rating: 5,
    image: ''
  },
  { 
    name: 'Chocolate Cake', 
    category: ['Dessert'], 
    ingredients: ['flour', 'sugar', 'cocoa powder', 'baking powder', 'eggs', 'milk', 'butter'], 
    steps: ['Preheat oven', 'Mix dry ingredients', 'Add wet ingredients', 'Bake in oven'],
    description: 'A rich and moist chocolate cake that is perfect for any occasion.',
    rating: 4,
    image: ''
  },
  { 
    name: 'Bruschetta', 
    category: ['Appetizer'], 
    ingredients: ['bread', 'tomatoes', 'basil', 'olive oil', 'garlic'], 
    steps: ['Toast bread', 'Chop tomatoes and basil', 'Mix with olive oil and garlic', 'Top bread with mixture'],
    description: 'A traditional Italian appetizer made with toasted bread topped with fresh tomatoes and basil.',
    rating: 3,
    image: ''
  },
  { 
    name: 'Caesar Salad', 
    category: ['Appetizer'], 
    ingredients: ['romaine lettuce', 'croutons', 'parmesan', 'Caesar dressing'], 
    steps: ['Chop lettuce', 'Add croutons and parmesan', 'Toss with dressing'],
    description: 'A crisp and refreshing salad with romaine lettuce, croutons, parmesan, and Caesar dressing.',
    rating: 4,
    image: ''
  },
  { 
    name: 'Beef Stew', 
    category: ['Main'], 
    ingredients: ['beef', 'potatoes', 'carrots', 'onions', 'beef broth'], 
    steps: ['Brown beef', 'Add vegetables and broth', 'Simmer until tender'],
    description: 'A hearty and comforting beef stew with tender beef, potatoes, carrots, and onions.',
    rating: 4,
    image: ''
  },
]);


  public filteredRecipes$: Observable<Recipe[]> = this.recipes$.pipe(
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

  public setFilters(keyword: string = this.keyword, categories: string = this.category, ingredient: string = this.ingredient): void {
    this.keyword = keyword;
    this.category = categories;
    this.ingredient = ingredient;
  }

  public reset(): void {
    this.keyword = '';
    this.category = '';
    this.ingredient = '';
  }
}
