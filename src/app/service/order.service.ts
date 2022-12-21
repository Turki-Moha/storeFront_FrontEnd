import { Injectable } from '@angular/core';
import { Order } from '../types';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order:Order
  constructor() { }

  OrderSubmission(order:Order){
    this.order = order
  }

  showOrder(){
    return this.order
  }

}
