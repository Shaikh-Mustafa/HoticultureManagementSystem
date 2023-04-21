import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertifyService } from 'src/Shared/Services/alertify.service';
import { loginReq } from '../Models/loginReq';
import { loginRes } from '../Models/loginRes';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class PublicServicesService {

  isLoggedin : boolean = false;

  baseUrl : string = 'https://localhost:7017/api/'

  constructor(private https : HttpClient,
     private alertify : AlertifyService,
     private router : Router
     ) { }

  CreateUser(user : User):Observable<any>{
    return this.https.post(
     this.baseUrl + 'User/CreateUser',
     user
    )
  }

userLogin(user : loginReq):Observable<any>{
  return this.https.post(
    this.baseUrl + "Account/login",
    user
  )
}

setDataAfterLogin(token : string, username : string, userType : string){
    localStorage.setItem("token",token);
    localStorage.setItem('username',username);
    localStorage.setItem('userType',userType);
    localStorage.setItem('isLoggedIn','true');
}


Logout(){
  localStorage.clear();
  this.isLoggedin = false;
  this.alertify.success("Logged out!!");
  this.router.navigate(['/'])

  // window.location.reload();
}

registerAsFarmOwner(data : any){
  return this.https.post(
    this.baseUrl + 'Account/RegisterAsFarmOwner',
    data
  )
}

RegisterAsBuyer(data : any){
 return this.https.post(
    this.baseUrl + 'Account/RegisterAsBuyer',
    data
  )
}

}
