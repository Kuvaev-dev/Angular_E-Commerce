import {Product} from "./product";
import {Order} from "./order";

export class OrderItem {
  id: number;
  unit_price: number;
  quantity: number;
  totalPrice: number;
  product: Product;
  order: Order;
  productId: number;
  orderId: number;

  constructor(id: number, unit_price: number, quantity: number,
              totalPrice: number, product: Product, order: Order,
              productId: number, orderId: number) {
    this.id = id;
    this.unit_price = unit_price;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.product = product;
    this.order = order;
    this.productId = productId;
    this.orderId = orderId;
  }
}
