import { Component, OnInit } from '@angular/core';
import { Stocks } from 'src/app/Public/Models/Stocks';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  Stock : Stocks[] = [
    {
      StockId  : 1,
      StockName : 'Dec Batch',
      StockDescription : 'Stock form last month',
      StockType : 'old',
      StockPrice:  12000,
      IsAvailalble :  true,
    },
    {
      StockId  :  2,
      StockName : 'Fresh Stock',
      StockDescription : 'this month stock',
      StockType : 'fresh',
      StockPrice:  15000,
      IsAvailalble :  true,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
