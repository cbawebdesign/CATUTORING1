import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-five-customer',
  templateUrl: './section-five-customer.component.html'
})
export class SectionFiveCustomerComponent implements OnInit {

 
  videoDetail: any = {
    img:"logo.png",
    link:"https://www.youtube.com/watch?v=z24fdobZeIU"
  };
  constructor() { }
  
  ngOnInit() {
  }
  
  }
  