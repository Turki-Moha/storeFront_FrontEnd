import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url = ""
  item:Item;
  constructor(private http:HttpClient) { }
  retriveItems():Observable<Item[]>{
    this.url = './../../assets/data.json'
    return this.http.get<[]>(this.url)
  }
  retriveItem(id:number):Item{
    this.retriveItems().subscribe(res=>{
      this.item = res.find( a=> a.id === id)
      return res.find(a =>a.id === id)
    })
    return this.item
  }
}