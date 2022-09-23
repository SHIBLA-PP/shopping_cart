import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-aal-product',
  templateUrl: './view-aal-product.component.html',
  styleUrls: ['./view-aal-product.component.css']
})
export class ViewAalProductComponent implements OnInit {

  productList:any

  constructor(private productService:ProductService) {
   }

  ngOnInit(): void {
    this.productService.viewAllProducts().subscribe((data)=>{
      this.productList=data
      console.log(this.productList);
      
    })

  }



}
