import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product-detail-image',
  templateUrl: './product-detail-image.component.html',
  styleUrls: ['./product-detail-image.component.css']
})
export class ProductDetailImageComponent implements OnInit {
  @Input() images:string[]=[];
  @ViewChild('MainImage') imageRef!:ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.log(this.images)
  }

}
