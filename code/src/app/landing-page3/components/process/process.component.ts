import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {

  
  titleSectionProp: any = {
    title: '$15.00',
    subTitle: 'Options math- Spreads',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  };

  Lists: any = {
    isOuter: false,
    img: 'hi.jpg',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  };

  constructor() { }

  ngOnInit() {
  }

}
