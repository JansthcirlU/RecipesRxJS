import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {


  @Input() recipe!: Recipe;

  constructor() { }

  
}
