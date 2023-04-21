import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/Public/Models/Products';
import { AlertifyService } from 'src/Shared/Services/alertify.service';
import { AdminServiceService } from '../../Services/admin-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductReq : Products | any = {
    productName :  '',
    productPrice :  '',
    productImage :  '',
    isAvailable  : false
  }

  addProductForm : FormGroup = new FormGroup({
    productName : new FormControl('',Validators.required), 
    productPrice : new FormControl('',Validators.required),
    isAvailable  : new FormControl('',Validators.required)  
  })

  constructor(
    private alertify : AlertifyService, 
    private adminServie : AdminServiceService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  addProduct(){
    if(!this.addProductForm.valid){
      this.alertify.error("Invalid Form!!");
    }
    else{
      this.alertify.success("Product Added Successfully");
      this.addProductReq = {
        productName : this.addProductForm.get('productName'),
        productPrice : this.addProductForm.get('productPrice'),
        isAvailable : this.addProductForm.get('isAvailable')
      }

      this.adminServie.addProduct(this.addProductReq).subscribe((response:any)=>{
        this.alertify.success("Product Added Successfully!!!");
        this.router.navigate(['/admin/products'])
      });
    }
  }

}
