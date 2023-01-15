import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Public/Models/Product';

@Component({
  selector: 'app-home-product-categories',
  templateUrl: './home-product-categories.component.html',
  styleUrls: ['./home-product-categories.component.css']
})
export class HomeProductCategoriesComponent implements OnInit {
  DealOfTheDay : Product[] = [];

  TrendingProducts : Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.DealOfTheDay = [
      {
        productName : "Crassula marginalis rubra 'Calico Kitten'",
        productPrice : '6.00',
        productImage : '../../../../../assets/Images/crassula-calico-kitten_720x.png'
      },
      {
        productName : "Echeveria 'Lola''",
        productPrice : '6.00',
        productImage : "../../../../../assets/Images/Echeveria 'Lola'.png"
      },
      {
        productName : "Senecio rowleyanus 'String of Pearls'",
        productPrice : '6.00',
        productImage : "../../../../assets/Images/Senecio rowleyanus 'String of Pearls'.png"
      },
      {
        productName : "Rowleyanus 'String of Pearls'",
        productPrice : '6.00',
        productImage : "../../../../assets/Images/Detail-page.webp"
      }
    ]

    this.TrendingProducts = [
      {
        productName : "Crassula marginalis rubra 'Calico Kitten'",
        productPrice : '6.00',
        productImage : '../../../../assets/Images/crassula-calico-kitten_720x.png'
      },
      {
        productName : "Echeveria 'Lola''",
        productPrice : '6.00',
        productImage : "../../../../assets/Images/Echeveria 'Lola'.png"
      },
      {
        productName : "Echeveria 'Lola''",
        productPrice : '6.00',
        productImage : "../../../../assets/Images/Echeveria 'Lola'.png"
      },  
      {
        productName : "Senecio rowleyanus 'String of Pearls'",
        productPrice : '6.00',
        productImage : "../../../../assets/Images/Senecio rowleyanus 'String of Pearls'.png"
      },        
      {
        productName : "Crassula marginalis rubra 'Calico Kitten'",
        productPrice : '6.00',
        productImage : '../../../../assets/Images/crassula-calico-kitten_720x.png'
      },     
      {
        productName : "Senecio rowleyanus 'String of Pearls'",
        productPrice : '6.00',
        productImage : "../../../../assets/Images/Senecio rowleyanus 'String of Pearls'.png"
      },          
    ]
  }

}
