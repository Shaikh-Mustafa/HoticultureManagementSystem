import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'src/app/Public/Models/Products';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  baseUrl : string = 'https://localhost:7017/api/'


  constructor(private https : HttpClient) { }

  addProduct(product : Products){
    return this.https.post(
      this.baseUrl + '/api/Product/addProduct',
      product
    )
  }

  getAllProducts(){
    return this.https.get(
      this.baseUrl + '/api/Product/getAllProducts'
    )
  }
}
