import { Category } from "./category";

export interface Recipe {
    name: string;
    category: Category;
    ingredients: string[];
    steps: string[];
}
