import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    title: '$10.00',
    subTitle: 'Basic Options Math for series 7',
    description: 'Video explaining basic options math to help with the Series 7. '
  };

  Lists: any = {
    isOuter: false,
    img: 'options.jpg',
    desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distractedMany desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
  };

  constructor() { }

  ngOnInit() {
  }

}
