import {Product} from "./product";
import {CategoryType} from "../enums/category-type";

export class Category {
  id: number;
  name: string;
  description: string;
  products: Product[];
  type: CategoryType;
}
