import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html'
})
export class EducationComponent implements OnInit {

  titleSectionProp1: any = {
    class: 'text-left',
    subTitle: 'Get tips & tricks on how to skyrocket your sales.',
    description: 'Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.! '
  };

  titleSectionProp2: any = {
    class: 'text-left',
    subTitle: 'Series 7 Top off exam prep',
    description: 'My weekly LIVE Q & A  for the series 7 exam and the SIE exam. I had questions on options and bonds as they relate to the Series 7 exam.  I also covered some acronyms that can help with the Series 7 exam'
  };

  List1: any[] = ['Boost retention', 'Understand concepts', 'Pass with confidence', 'Retention',];
  List2: any[] = [];
  constructor() { }

  ngOnInit() {
  }
}
