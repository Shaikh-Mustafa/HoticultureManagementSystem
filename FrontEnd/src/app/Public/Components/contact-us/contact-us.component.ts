import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup=new FormGroup(
    {
      name:new FormControl(''),
      email:new FormControl(''),
      subject:new FormControl(''),
      message:new FormControl('')
    }
  )
  constructor() { }

  ngOnInit(): void {
  }

}
