import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName:string='';
  constructor(private activeRout:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((param:any)=>{
      this.categoryName=param.get('categoryName')
    })
  }

}
