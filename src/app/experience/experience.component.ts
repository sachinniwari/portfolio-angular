import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Software Engineer",
        company: "MindRuby Technologies",
        color: "#3781c2",
        companylogo: "imageURL+'/assets/images/MR.png'",
        date: "Dec 2022 - Present",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Software Enginer at MindRuby Technologies",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Computer Science & Engineering",
        company: "IPS Academy",
        color: "#3f703f",
        companylogo: "imageURL+'/assets/images/ipsa.jpg'",
        date: "Aug 2019 – Jul 2023",
        desc: "I have completed my 4 year graduation degree in computer science with overall CGPA 8.15",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "PHP Development Intern",
        company: "Dollop Infotech",
        color: "#ff9102",
        companylogo: "imageURL+'/assets/images/DOLLOP.jpg'",
        date: "July 2022 – Nov 2022",
        desc: "The 5 months internship focused on web development in CodeIgniter and helped learn to work in a team",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
