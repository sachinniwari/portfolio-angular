import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/sachinniwari",
    linkedin: "https://www.linkedin.com/in/sachin-shrivastava-281b8010b",
    gmail: "sachinshrivastava955@gmail.com",
    instagram : "https://www.instagram.com/sachin_niwari/?hl=en",
    facebook: "https://www.facebook.com/sachinniwari1"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
