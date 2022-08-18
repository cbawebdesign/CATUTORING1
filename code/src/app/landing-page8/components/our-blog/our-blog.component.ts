import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Passing the SIE.',
    description: 'Check out this great video on the SIE exam, the co requisite for the Series 7 exam.'
  };

  List1: any[] = ['Boost retention', 'Understand concepts', 'Pass with confidence', 'Retention',];
  List2: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}