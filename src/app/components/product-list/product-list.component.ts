import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/service/item.service';
import { Item } from 'src/app/types';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  items:Item[];
  constructor(private itemservice:ItemService) {}

  ngOnInit():void{
    this.itemservice.retriveItems().subscribe(res=>{
      this.items = res
    })
  }

  onAdd(event:any){
    alert(`Item ${event.name} is added to the cart!`)
  }

}
