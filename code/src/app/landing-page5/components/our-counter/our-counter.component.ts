import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})

export class OurCounterComponent implements OnInit {


  List: any[] = [
    {
      number: 264,
      title: 'Students Helped',
      image: './assets/images/logo.png'
    },
    {
      number: 412,
      title: 'Exams Passed',
      image: './assets/images/logo.png'
    },
    {
      number: 45,
      title: 'Tutors on Staff',
      image: './assets/images/logo.png'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
