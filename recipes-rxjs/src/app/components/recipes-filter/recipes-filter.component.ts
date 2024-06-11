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
    let keyword = this.filterForm.get('keyword')?.value;
    let category = this.filterForm.get('category')?.value;
    let ingredients = this.filterForm.get('ingredients')?.value;

    this.recipesService.setFilters(
      keyword ?? '', 
      category ?? '', 
      ingredients?? '');
  }

  onReset() {
    this.filterForm.reset();
    this.recipesService.reset();
  }
  
}
