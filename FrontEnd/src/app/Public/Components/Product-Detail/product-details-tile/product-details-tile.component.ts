import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-tile',
  templateUrl: './product-details-tile.component.html',
  styleUrls: ['./product-details-tile.component.css']
})
export class ProductDetailsTileComponent implements OnInit {
  @Input() productName:string='';
  @Input() productprice:string='';
  @Input() productDiscription:string='';
  @Input() status:string='';
  @Input() payment:string='';
  @Input() productImage:string='';
  @Input() inStock!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
