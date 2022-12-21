import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { Cart,Order,Item } from 'src/app/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart:Cart[]
  total:number = 0;
  credit:string ='';
  order:Order = {
    name: '',
    total: 0,
    address:'',
    cart: [],
    id:0
  };

  constructor(private cartService:CartService,private router:Router,private orderService:OrderService ){}

  ngOnInit():void{
    this.cart = this.cartService.showCart()
    this.calcTotal()
  }

  calcTotal(){
    this.total = 0
    this.cart.forEach(Item =>{
      this.total += Item.item.price * Item.quantity
    })
    this.order.total = this.total
  }

  updateShoppingCart(item:Cart){
    this.cartService.editItem(item)
    if(item.quantity === 0){
      this.cart = this.cartService.showCart()
      alert('Item removed from cart!')
    }
  }

  OrderSubmission(){
    this.order.cart = this.cart
    this.orderService.OrderSubmission(this.order)
    alert('Order Successfully submitted!')
    this.router.navigate(['confirmation'])
  }

}
