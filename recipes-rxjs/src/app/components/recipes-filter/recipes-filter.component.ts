import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RecipesService } from '../../service/recipes.service';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-filter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipes-filter.component.html',
  styleUrl: './recipes-filter.component.css'
})
export class RecipesFilterComponent {

  public categories : Category[] = ['Main', 'Dessert', 'Appetizer'];

  filterForm = new FormGroup({
    keyword: new FormControl(''),
    category: new FormControl(''),
    ingredients: new FormControl(''),
  });
  
  constructor(private recipesService: RecipesService) {
    

   }

  onSubmit() {
    const keyword = this.filterForm.get('keyword')?.value;
    const category = this.filterForm.get('category')?.value;
    const ingredients = this.filterForm.get('ingredients')?.value;

    if (keyword) {
      this.recipesService.filterOnKeyword(keyword);
    } else if (category) {
      this.recipesService.filterOnCategory(category);
    } else if (ingredients) {
      this.recipesService.filterOnIngredient(ingredients);
    }
  }

  onReset() {
    this.filterForm.reset();
    this.recipesService.reset();
  }
  
}
