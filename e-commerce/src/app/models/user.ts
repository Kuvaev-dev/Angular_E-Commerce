import {Profile} from "./profile";
import {Order} from "./order";
import {Invoice} from "./invoice";
import {Payment} from "./payment";

export class User {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
  profile: Profile;
  orders: Order[];
  invoices: Invoice[];
  payments: Payment[];

  constructor(id: number, username: string, password: string,
              isAdmin: boolean, profile: Profile, orders: Order[],
              invoices: Invoice[], payments: Payment[]) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
    this.profile = profile;
    this.orders = orders;
    this.invoices = invoices;
    this.payments = payments;
  }
}
