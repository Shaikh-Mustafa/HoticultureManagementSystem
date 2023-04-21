import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/Shared/Services/alertify.service';
import { PublicServicesService } from '../../Services/public-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private publicService: PublicServicesService,
    private alertify : AlertifyService,
    private router : Router    
    ) {}

  ngOnInit(): void {   
  }

  Login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.publicService.userLogin(this.loginForm.value).subscribe((res:any)=>{
        console.log(res);

        // setting isLoggedin == true;
        this.publicService.isLoggedin = true;
        // setting the token to the localStorage 
        this.publicService.setDataAfterLogin(res.token, res.userName, res.userType);

        if(res.userType == "FarmOwner" || res.userType == "Admin"){
          // opening the admin site..
          this.router.navigate(['/admin']);
        }
        else{
          this.router.navigate(['/home']);
        }

        this.alertify.success("Login Successful");

        
      }, (error:any)=>{
        this.alertify.error("login Failed!!");
      });
    }
    else{
      this.alertify.warning("Invalid Form!!");
    }
  }
}
