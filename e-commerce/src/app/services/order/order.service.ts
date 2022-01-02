import {Injectable} from '@angular/core';
import {ErrorHandler} from "../../shared/error-handler";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Order} from "../../models/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private errorHandler: ErrorHandler = new ErrorHandler();
  private orderUrl = 'http://localhost:4200/orders/user-orders';

  constructor(private http: HttpClient) {
  }

  // для админа
  getOrders(): Observable<Order[]> {
    try {
      return this.http.get<Order[]>(this.orderUrl);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }

  // для юзера
  getUserOrder(orderId: number): Observable<Order> {
    try {
      return this.http.get<Order>(`${this.orderUrl}/${orderId}`);
    } catch (error) {
      this.errorHandler.handleError(error);
    }
  }
}
