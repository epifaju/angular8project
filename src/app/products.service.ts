import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 uri:'http://localhost:4000/products';
  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDesciption, ProductPrice){

    const obj ={
              ProductName,
              ProductDesciption,
              ProductPrice
    };

    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
              .subscribe(res => console.log("Done !"));

  }
}
