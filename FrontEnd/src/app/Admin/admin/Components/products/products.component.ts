import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Public/Models/Product';
import { Products } from 'src/app/Public/Models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products : Products[] = [
    {  
      productName :  "Echeveria 'Lola''",
    productPrice :  '1200',
    productImage :  'http://cdn.shopify.com/s/files/1/1124/9666/products/echeveria-lola_e899a957-9013-4ff8-83be-6e3db7516103.jpg?v=1500701115',
    isAvailable  : true,
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
