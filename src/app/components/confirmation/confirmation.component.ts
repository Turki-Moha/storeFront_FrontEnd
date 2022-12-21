import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/types';
import { OrderService } from 'src/app/service/order.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{

  order:Order
    constructor(private orderserviec:OrderService){}

  ngOnInit():void {
    this.order = this.orderserviec.showOrder()
    console.log(this.order)
  }
}
