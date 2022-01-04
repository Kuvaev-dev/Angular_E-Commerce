import {Category} from "./category";
import {CartItem} from "./cart-item";
import {OrderItem} from "./order-item";

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  publishedIn: Date;
  addedToCart: boolean;
  quantity: number;
  cartQuantity: number;
  image: string;
  category: Category;
  cartItem: CartItem;
  order_items: OrderItem[];

  constructor(id: number, name: string, description: string, price: number,
              publishedIn: Date, addedToCart: boolean, quantity: number, cartQuantity: number,
              image: string, category: Category, cartItem: CartItem, order_items: OrderItem[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.publishedIn = publishedIn;
    this.addedToCart = addedToCart;
    this.quantity = quantity;
    this.cartQuantity = cartQuantity;
    this.image = image;
    this.category = category;
    this.cartItem = cartItem;
    this.order_items = order_items;
  }
}
