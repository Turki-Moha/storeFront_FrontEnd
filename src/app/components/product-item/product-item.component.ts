import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Item } from 'src/app/types';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{
  @Input() item:Item;
  @Output() alertEvent = new EventEmitter();
  constructor(private cartService:CartService){}

  ngOnInit():void{

  }
  onAdd(product:Item,quantity:string){
    this.cartService.addItemToCart(product,+quantity)
    this.alertEvent.emit(product)
  }
}