import { Injectable } from '@angular/core';
import { Cart, Item } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item:Cart
  cart:Cart[] = []
  constructor() { }

  showCart():Cart[]{
    return this.cart
  }
  addItemToCart(item:Item,quantity:number):void{
    this.item = this.cart.find(a=>a.item.id === item.id)
    if(this.item !== undefined){
      this.item.quantity +=quantity
    }else{
      this.cart.push({item,quantity:quantity})
    }
  }
  editItem(item:Cart):Cart{
    this.item = this.cart.find(a =>a.item.id === item.item.id)
    if(item.quantity ===0){
      this.cart.forEach((product,index)=>{
        if(item.item.name === product.item.name){
          this.cart.splice(index,1)
        }
      })
    }else{
      this.item.quantity = item.quantity
    }
    return this.item
  }
}