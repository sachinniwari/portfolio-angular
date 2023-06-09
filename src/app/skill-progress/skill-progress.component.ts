import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-skill-progress',
  templateUrl: './skill-progress.component.html',
  styleUrls: ['./skill-progress.component.scss']
})
export class SkillProgressComponent implements OnInit {
  imageURL = environment.imageURL;
  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Frontend/Design",
        progressPercentage: "75%"
      },
      {
        Stack: "Backend",
        progressPercentage: "60%"
      },
      {
        Stack: "Programming",
        progressPercentage: "60%"
      },
      {
        Stack: "MachineLearning/AI",
        progressPercentage: "30%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {    width: percentage}
  }

}
