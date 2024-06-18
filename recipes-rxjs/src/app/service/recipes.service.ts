import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe';
import { RecipesFilter } from '../models/recipes-filter';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes$: Observable<Recipe[]> = of([
    {
      name: 'Spaghetti Carbonara',
      category: 'Main',
      ingredients: ['spaghetti', 'eggs', 'pancetta', 'parmesan', 'pepper'],
      steps: [
        'Boil pasta',
        'Cook pancetta',
        'Mix eggs and cheese',
        'Combine all with pasta',
      ],
      description:
        'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
      rating: 5,
      image: '',
    },
    {
      name: 'Chocolate Cake',
      category: 'Dessert',
      ingredients: [
        'flour',
        'sugar',
        'cocoa powder',
        'baking powder',
        'eggs',
        'milk',
        'butter',
      ],
      steps: [
        'Preheat oven',
        'Mix dry ingredients',
        'Add wet ingredients',
        'Bake in oven',
      ],
      description:
        'A rich and moist chocolate cake that is perfect for any occasion.',
      rating: 4,
      image: '',
    },
    {
      name: 'Bruschetta',
      category: 'Appetizer',
      ingredients: ['bread', 'tomatoes', 'basil', 'olive oil', 'garlic'],
      steps: [
        'Toast bread',
        'Chop tomatoes and basil',
        'Mix with olive oil and garlic',
        'Top bread with mixture',
      ],
      description:
        'A traditional Italian appetizer made with toasted bread topped with fresh tomatoes and basil.',
      rating: 3,
      image: '',
    },
    {
      name: 'Caesar Salad',
      category: 'Appetizer',
      ingredients: [
        'romaine lettuce',
        'croutons',
        'parmesan',
        'Caesar dressing',
      ],
      steps: [
        'Chop lettuce',
        'Add croutons and parmesan',
        'Toss with dressing',
      ],
      description:
        'A crisp and refreshing salad with romaine lettuce, croutons, parmesan, and Caesar dressing.',
      rating: 4,
      image: '',
    },
    {
      name: 'Beef Stew',
      category: 'Main',
      ingredients: ['beef', 'potatoes', 'carrots', 'onions', 'beef broth'],
      steps: ['Brown beef', 'Add vegetables and broth', 'Simmer until tender'],
      description:
        'A hearty and comforting beef stew with tender beef, potatoes, carrots, and onions.',
      rating: 4,
      image: '',
    },
  ]);

  private filterSubject = new BehaviorSubject<RecipesFilter | undefined>(
    undefined,
  );
  filter$ = this.filterSubject.asObservable();

  filteredRecipes$: Observable<Recipe[]> = combineLatest([
    this.recipes$,
    this.filter$,
  ]).pipe(
    map(([recipes, filter]) => {
      if (!filter) {
        return recipes;
      }
      return recipes.filter((recipe) => this.filterRecipe(recipe, filter));
    }),
  );

  constructor() {}

  private filterRecipe(recipe: Recipe, filter: RecipesFilter): boolean {
    const { keyword, category, ingredient } = filter;
    return (
      (keyword
        ? recipe.name.includes(keyword) ||
          recipe.ingredients.some((ing) => ing.includes(keyword)) ||
          recipe.steps.some((step) => step.includes(keyword))
        : true) &&
      (category ? recipe.category === category : true) &&
      (ingredient ? recipe.ingredients.includes(ingredient) : true)
    );
  }

  public setFilters(
    keyword: string,
    category: Category,
    ingredient: string,
  ): void {
    this.filterSubject.next({
      keyword: keyword,
      category: category,
      ingredient: ingredient,
    });
  }

  public reset(): void {
    this.filterSubject.next(undefined);
  }
}
