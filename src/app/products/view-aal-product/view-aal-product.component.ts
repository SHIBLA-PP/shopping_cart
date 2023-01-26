import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-aal-product',
  templateUrl: './view-aal-product.component.html',
  styleUrls: ['./view-aal-product.component.css']
})
export class ViewAalProductComponent implements OnInit {

  productList:any;
  categorylist:any;
  searchItem:any;
  constructor(private productService:ProductService) {
   }

  ngOnInit(): void {
    this.productService.viewAllProducts().subscribe((data)=>{
      this.productList=data
    })

    this.productService.search.subscribe((term)=>{
      this.searchItem = term
    })

  }
  
  categorySearch(category:any)
  {
   this.categorylist=this.productList.filter((item:any)=>{
      if(category==''|| category == item.categoryId)
      {
        return item
      }
      
    })

    console.log(this.categorylist);
    
  }

}
