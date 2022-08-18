


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR SERVICES',
    subTitle: 'What Our Clients Say',
  };

  List : any[] = [
    {
      img:"1.jpg",
      name:"Alisha Chewning",
      designation:"9/16/2021",
      desc:"Ken is great at what he does. He has helped me tremendously in my studies for the SIE and the Series 7. Ken always responds to emails and texts in a timely manner and is invested in your success. He gives back generously and genuinely wants to help you pass your test."
    },
    {
      img:"2.jpg",
      name:"Isaac Milligan",
      designation:"10/25/21",
      desc:"Capital Advantage Tutoring, true to its name, gives you a distinct advantage when taking any kind of FINRA exam. Ken is a consummate professional with clear knowledge of the industry who is patient, clear, and exceptionally talented at making complicated topics easy. If you are considering booking Ken for a session, my advice is to invest in yourself and your future, you will absolutely not regret it.      ."
    },
    {
      img:"3.jpg",
      name:"Ashley Starr",
      designation:"4/11/21",
      desc:"“I am so impressed with the professionalism and knowledge of Ken. I had 9 sessions with him on Zoom of conversations, practices questions and overall boosting my test taking confidence. He worked with me to make sure I not only knew the laws and facts but I knew why that was the case for each question and concept. I was able to pass the Series 66 exam today without any issues! I went through the exam feeling like I knew every answer and concept mentioned because of the suggestions and tips Ken shared with me. Highly recommend his services. Everyone I speak to that has worked with him have passed their exams with flying colors!”"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
