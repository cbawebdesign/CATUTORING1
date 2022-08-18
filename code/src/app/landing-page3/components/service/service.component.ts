import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {

  titleSectionProp: any = {
    title: '$20.00',
    subTitle: 'Hedging Options for the Series 7 exam',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for'
  };

  Lists: any = {
    isOuter: false,
    img: 'ahh.jpg',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  };

  constructor() { }

  ngOnInit() {
  }

}
