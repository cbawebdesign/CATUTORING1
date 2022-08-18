import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Series 7 exam prep the VENDORS',
    description: 'I give a no holds review of the  various vendors  for the SIE and Series 7 exam top off exam.  My reviews also pertain to the Series 6 exam although I dont specifically mention the Series 6 top off.'
  };

  List1: any[] = ['Boost retention', 'Understand concepts', 'Pass with confidence', 'Retention',];
  List2: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
