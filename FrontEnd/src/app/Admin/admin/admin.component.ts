import { Component, OnInit } from '@angular/core';
import { PublicServicesService } from 'src/app/Public/Services/public-services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private publicService : PublicServicesService) { }

  userName : any = '';
  userType : any = '';

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    this.userType = localStorage.getItem('userType');
  }

  Logout(){
    this.publicService.Logout();
  }
}
