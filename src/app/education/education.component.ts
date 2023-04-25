import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      heading: "Software Engineer",
      duration: "2023",
      subtitle: "MindRuby Technologies, Indore",
      content: "Working Full Time on Live Projects with various technology like ReactJs, AngularJs, CodeIgniter, Ionic etc.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "B.Tech - Computer Science & Engineering",
      duration: "2023",
      subtitle: "Institute of Engineering & Science, IPS Academy, Indore",
      content: "Successfully completed my B.tech in Computer science from IPS Academy, Indore.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "PHP Development Intern",
      duration: "2022",
      subtitle: "Dollop Infotech Pvt. Ltd., Indore",
      content: "Successfully completed 5 Months Internship on CodeIgniter Framework where I developed REST API in CodeIgniter",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2019",
      subtitle: "MP Board",
      content: "Successfully completed my intermediate studies in 2019 from Jesus Krist Model Higher Secondary School, Niwari.\n" +
        "Major: PCM.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2017",
      subtitle: "MP Board",
      content: "Successfully completed my high school studies in 2017 from Jesus Krist Model Higher Secondary School, Niwari.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
