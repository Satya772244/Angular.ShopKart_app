import { Component,OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  productList: undefined |product[];
  constructor(private product:ProductsService){}

  ngOnInit() {
    this.product.productList()
    .subscribe((result)=>{
      this.productList = result;
    });
  }
}
