import {User} from "./user";
import {Payment} from "./payment";
import {Order} from "./order";

export class Invoice {
  id: number;
  number: string;
  invoice_total: number;
  invoice_date: Date;
  due_date: Date;
  payment_date: Date;
  client: User;
  payment: Payment;
  order: Order;

  constructor(id: number, number: string, invoice_total: number,
              invoice_date: Date, due_date: Date, payment_date: Date,
              client: User, payment: Payment, order: Order) {
    this.id = id;
    this.number = number;
    this.invoice_total = invoice_total;
    this.invoice_date = invoice_date;
    this.due_date = due_date;
    this.payment_date = payment_date;
    this.client = client;
    this.payment = payment;
    this.order = order;
  }
}
