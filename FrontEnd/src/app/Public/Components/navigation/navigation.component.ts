import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../Models/CartItem';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  CartItem: CartItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.CartItem = [
      {
        productName : "Crassula marginalis rubra 'Calico Kitten'",
        productPrice : 6.00,
        productImage : '../../../../assets/Images/crassula-calico-kitten_720x.png',
        productQuantity: 2
      },
      {
        productName : "Echeveria 'Lola''",
        productPrice : 12.00,
        productImage : "../../../../assets/Images/Echeveria 'Lola'.png",
        productQuantity: 4
      }
    ]
  }

}
