import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginReq } from '../Models/loginReq';
import { loginRes } from '../Models/loginRes';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class PublicServicesService {

  isLoggedin : boolean = false;

  baseUrl : string = 'https://localhost:7017/api/'

  constructor(private https : HttpClient) { }

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

setTokenAfterLogin(token : string){
    localStorage.setItem("token",token);
}


}
