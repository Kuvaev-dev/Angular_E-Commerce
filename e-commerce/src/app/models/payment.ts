import {User} from "./user";
import {PaymentMethods} from "../enums/payment-methods";
import {Invoice} from "./invoice";

export class Payment {
  id: number;
  client: User;
  date: Date;
  amount: number;
  payment_method: PaymentMethods;
  invoice: Invoice;

  constructor(id: number, client: User, date: Date,
              amount: number, payment_method: PaymentMethods, invoice: Invoice) {
    this.id = id;
    this.client = client;
    this.date = date;
    this.amount = amount;
    this.payment_method = payment_method;
    this.invoice = invoice;
  }
}
