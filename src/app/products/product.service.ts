import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search = new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  // API calls
  //ViewAllProducts api
  viewAllProducts()
  {
    return this.http.get('http://localhost:3000/products')
  }

  // View-Product api
  viewProduct(productId:any)
  {
    return this.http.get('http://localhost:3000/products/'+productId)
  }

  // Add New Product api
  addProduct(productBody:any)
  {
    return this.http.post('http://localhost:3000/products/',productBody)
  }

  // Update product api
  updateProduct(productId:any,productBody:any)
  {
    return this.http.put('http://localhost:3000/products/'+productId,productBody)
  }

  // Delete product api
  deleteProduct(productId:any)
  {
    return this.http.delete('http://localhost:3000/products/'+productId)
  }

}
