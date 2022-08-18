import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonial',
  templateUrl: './our-testimonial.component.html'
})
export class OurTestimonialComponent implements OnInit {

  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Series 7 exam prep',
    description: 'Here is a video to help you prepare for the Series 7 Top-off exam. I also snuck a little Series 7 exam question into the video.. See if you can answer it and challenge the best Series 7 exam tutor in NYC.'
  };

  List1: any[] = [];
  List2: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}