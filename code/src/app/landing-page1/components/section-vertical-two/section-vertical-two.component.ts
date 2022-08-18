import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-vertical-two',
  templateUrl: './section-vertical-two.component.html'
})
export class SectionVerticalTwoComponent implements OnInit {
  titleSectionProp: any = {
    class: 'text-center',
    title: 'PRICING',
    subTitle: 'Simple and Transparent Pricing',
  };

  List: any[] = [
    {
      title: "Single Lessons",
      subtitle: 'Series 7 Session',
      price: "175$",
      plan_desc: "/Hour",
      href: "#",
      services: [ "1 on 1 session with one of our series 7 experts." ," Intensive hour of instruction that will improve your scores drastically.", ]
    },
    {
      title: "Single Lessons",
      subtitle: 'Emergency Cram Session',
      price: "500$",
      plan_desc: "/2 Hours",
      active: true,
      href: "#",
      services: [ "Panic setting in? Only 2 days until the test? Want someone to help you get those last minute score bumps? We will evaluate your situation and help you get over the hurdles in your way." ]
    },
    {
      title: "Tutoring Packages",
      subtitle: '10 Hours',
      price: "1600$",
      plan_desc: "/10 Hours",
      href: "#",
      services: [ "10 hours of intensive 1 on 1 sessions. scheduled at least 48 hours before lesson to ensure availability." ]
    },

    {
      title: "Tutoring Packages",
      subtitle: '5 Hours',
      price: "850$",
      plan_desc: "/5 Hours",
      href: "https://capadvantagetutoring.com/",
      services: [ "5 hours of intensive 1 on 1 sessions. scheduled at least 48 hours before lesson to ensure availability" ]
    },
    {
      title: "Tutoring Packages",
      subtitle: '2 Hours',
      price: "325$",
      plan_desc: "/2Hours ",
      href: "#",
      services: [ "2 hours of intensive 1 on 1 sessions. scheduled at least 48 hours before lesson to ensure availability" ]
    },
  ]
  constructor() { }

  ngOnInit() {
  }


}
