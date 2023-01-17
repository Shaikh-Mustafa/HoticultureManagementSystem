import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-product-tile',
  templateUrl: './cart-product-tile.component.html',
  styleUrls: ['./cart-product-tile.component.css']
})
export class CartProductTileComponent implements OnInit {
  @Input() productName : string = '';
  @Input() productPrice : number = 0;
  @Input() productImage : string = '';
  @Input() productQuantity:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
