import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private publicService: PublicServicesService) {}

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
        this.publicService.setDataAfterLogin(res.token, res.userName);



        window.alert(res);
      }, (error:any)=>{
        window.alert("login Failed!!");
      });
    }
    else{
      window.alert("Invalid Form!!");
    }
  }
}
