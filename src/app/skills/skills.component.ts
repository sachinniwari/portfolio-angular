import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  imageURL = environment.imageURL;
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
      "⚡ Creating application backend in Node, CodeIgniter",
      "⚡ Developing a REST API for application",
    ]
  };
  
  constructor() {
   }

  ngOnInit(): void {
  }
  

}
