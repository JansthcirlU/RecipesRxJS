import { Category } from './category';

export interface RecipesFilter {
  keyword: string;
  category: Category;
  ingredient: string;
}
