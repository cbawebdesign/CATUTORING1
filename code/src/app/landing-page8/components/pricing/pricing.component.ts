import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class PricingComponent implements OnInit {
  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'SIE exam or Series 7 top off exam test day is today!',
    description: 'Here is some advice to help you on the day of the SIE exam or the Series 7 exam by a series 7 tutor.'
  };

  List1: any[] = ['Boost retention', 'Understand concepts', 'Pass with confidence', 'Retention',];
  List2: any[] = [];
  constructor() { }

  ngOnInit() {
  }


}
