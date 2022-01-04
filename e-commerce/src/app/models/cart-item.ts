import {Product} from "./product";
import {Cart} from "./cart";

export class CartItem {
  id: number;
  total_products: number;
  products: Product[];
  cartId: Cart;

  constructor(id: number, total_products: number, products: Product[], cartId: Cart) {
    this.id = id;
    this.total_products = total_products;
    this.products = products;
    this.cartId = cartId;
  }
}
