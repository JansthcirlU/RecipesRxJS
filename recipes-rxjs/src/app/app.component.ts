import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesFilterComponent } from './components/recipes-filter/recipes-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipesFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipes-rxjs';
}
