import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
})
export class CareersComponent implements OnInit {
  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'cbawebdesign1@gmail.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Become a Tutor",
    img:"logo.png"
  };

  List : any[] =[
    {
      title:"NY Office",
      address:"1140 Avenue of the Americas, New York, New York 10036, United States"
    }
    // {
    //   title:"Australia Office",
    //   address:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
    // },
    // {
    //   title:"New zealand Office",
    //   address:"Michael I. Days 3756 Preston Street Wichita, KS 67213 Phone:857-778-1265"
    // }

  ]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }


}
