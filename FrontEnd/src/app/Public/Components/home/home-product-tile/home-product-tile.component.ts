import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-product-tile',
  templateUrl: './home-product-tile.component.html',
  styleUrls: ['./home-product-tile.component.css']
})
export class HomeProductTileComponent implements OnInit {

  @Input() productName : string = '';
  @Input() productPrice : string = '';
  @Input() productImage : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
