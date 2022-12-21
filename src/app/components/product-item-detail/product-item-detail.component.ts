import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/types';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{

  id:number;
  item:Item;
  itemList:Item[];
  constructor(private cartService:CartService,private itemservice:ItemService,private router:ActivatedRoute){}

  ngOnInit():void{
    this.id = +this.router.snapshot.paramMap.get('id')
    this.itemservice.retriveItems().subscribe(res=>{
      this.item = res.find( a => a.id === this.id)
    })
  }

  onAdd(product:Item,quantity:string){
    this.cartService.addItemToCart(product,+quantity)
    console.log(quantity)
    alert('item added to cart!')
  }

}
