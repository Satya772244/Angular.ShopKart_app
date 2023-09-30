import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { product } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
}
