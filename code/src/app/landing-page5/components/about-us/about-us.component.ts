import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Capital Advantage Tutoring',
    subTitle: 'Top Rated Finra Exam Tutors'
  };
  
  List: any[] = [
    {
      title: 'SIE Exam',
      subtitle: 'Next Generation Broadband Networks, delivering programmability, automation, and new services to businesses and governments worldwide.',
      image: './assets/images/logo.png'
    },
    {
      title: 'Series 57 Exam',
      subtitle: 'Cloud based data management platforms focused on security, privacy, and sovereignty delivered through innovative core and edge infrastructure.                                                   ',
      
      image: './assets/images/logo.png'
    },
    {
      title: 'Series 63 Exam',
      subtitle: 'IoT platforms for urban infrastructure and smart city solutions partnering closely with utilities and municipalities worldwide. ',
      image: './assets/images/logo.png'
    },
    {
      title: 'Series 24 Exam',
      subtitle: 'IoT platforms for urban infrastructure and smart city solutions partnering closely with utilities and municipalities worldwide. ',
      image: './assets/images/logo.png'
    },
    {
      title: 'Series 6 Exam',
      subtitle: 'IoT platforms for urban infrastructure and smart city solutions partnering closely with utilities and municipalities worldwide. ',
      image: './assets/images/logo.png'
    },
    {
      title: 'Series 9 Exam',
      subtitle: 'IoT platforms for urban infrastructure and smart city solutions partnering closely with utilities and municipalities worldwide. ',
      image: './assets/images/logo.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
