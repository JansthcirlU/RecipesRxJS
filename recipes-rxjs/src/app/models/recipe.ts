import { Category } from "./category";

export interface Recipe {
    name: string;
    description?: string;
    category: Category;
    ingredients: string[];
    steps: string[];
    image?: string;
    rating?: 1 | 2 | 3 | 4 | 5;
}
