import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/Shared/Services/alertify.service';
import { PublicServicesService } from '../../Services/public-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  activeTab : String = 'Buyer';

  farmOwnerForm = new FormGroup({
    firstName : new FormControl("",Validators.required),
    lastName : new FormControl("",Validators.required),
    location : new FormControl("",Validators.required),
    farmType : new FormControl("",Validators.required),
    phone : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required),    
  });

  BuyerForm = new FormGroup({
    firstName : new FormControl("",Validators.required),
    lastName : new FormControl("",Validators.required),    
    phone : new FormControl("",Validators.required),
    email : new FormControl("",Validators.required),
    password : new FormControl("",Validators.required), 
    address : new FormControl("",Validators.required) 
  });

  constructor(private router : Router,
     private publicService : PublicServicesService,
     private alertify : AlertifyService) { }

  ngOnInit(): void {
  }
  navigateToLogin(){
    this.router.navigate(['login'])
  }

  RegisterasFarmOwner(){
    if(!this.farmOwnerForm.valid){
      this.alertify.error("Form Invalid!!");

    }
    else{
      console.log(this.farmOwnerForm.value);
      this.publicService.registerAsFarmOwner(this.farmOwnerForm.value).subscribe((response : any)=>{
        this.alertify.success("Registration Successfull!!");
        this.router.navigate(['login'])
  
      }, (error : any)=>{
        this.alertify.error("Something Went Wrong!!");
      })
    }
   
  }

  RegisterAsBuyer(){
    if(!this.BuyerForm.valid){
      this.alertify.error("Form Invalid!!");

    }
    else{
      console.log(this.BuyerForm.value);
      this.publicService.RegisterAsBuyer(this.BuyerForm.value).subscribe((response : any)=>{
        this.alertify.success("Registration Successfull!!");
        this.router.navigate(['login'])
      }, (error : any)=>{
        this.alertify.error("Something Went Wrong!!");
      }
  
      )
    }
   


}
}
