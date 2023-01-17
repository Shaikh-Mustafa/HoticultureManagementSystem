import { Component, OnInit } from '@angular/core';
import { PublicServicesService } from '../../Services/public-services.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isUserLoggedIn : boolean = false;
  userName : string = '';

  constructor(private publicService : PublicServicesService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = localStorage.getItem('isLoggedIn') == 'true'? true:false;
    this.userName = localStorage.getItem('username')!;    
  }

  

}
