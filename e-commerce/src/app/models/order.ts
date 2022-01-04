import {OrderStatus} from "../enums/order-status";
import {User} from "./user";
import {OrderItem} from "./order-item";
import {Invoice} from "./invoice";

export class Order {
  id: number;
  order_date: Date;
  status: OrderStatus;
  shipmentDate: Date;
  comments: string;
  shippedTo: string;
  user: User;
  order_item: OrderItem[];
  invoice: Invoice[];
  invoiceId: number;

  constructor(id: number, order_date: Date, status: OrderStatus, shipmentDate: Date,
              comments: string, shippedTo: string, user: User, order_item: OrderItem[],
              invoice: Invoice[], invoiceId: number) {
    this.id = id;
    this.order_date = order_date;
    this.status = status;
    this.shipmentDate = shipmentDate;
    this.comments = comments;
    this.shippedTo = shippedTo;
    this.user = user;
    this.order_item = order_item;
    this.invoice = invoice;
    this.invoiceId = invoiceId;
  }
}
