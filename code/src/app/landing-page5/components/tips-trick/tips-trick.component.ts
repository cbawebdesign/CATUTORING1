import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tips-trick',
  templateUrl: './tips-trick.component.html'
})
export class TipsTrickComponent implements OnInit {

 
videoDetail: any = {
  img:"logo.png",
  link:"https://www.youtube.com/watch?v=z24fdobZeIU"
};
constructor() { }

ngOnInit() {
}

}
