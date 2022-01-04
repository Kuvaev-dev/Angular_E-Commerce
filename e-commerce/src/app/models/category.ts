import {Product} from "./product";
import {CategoryType} from "../enums/category-type";

export class Category {
  id: number;
  name: string;
  description: string;
  products: Product[];
  type: CategoryType;

  constructor(id: number, name: string, description: string, products: Product[], type: CategoryType) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.products = products;
    this.type = type;
  }
}
