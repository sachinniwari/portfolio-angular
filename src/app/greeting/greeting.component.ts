import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  // animations:[  trigger('list1', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateX(0)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       transform: 'translateX(100px)',
  //       opacity: 0
  //     }))
  //   ])
  // ])]
  //
  //
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('in', style({
  //       opacity: 0
  //     })),
  //     state('out',   style({
  //       opacity: 1
  //     })),
  //     transition('in => out', animate('100ms ease-in')),
  //     transition('out => in', animate('100ms ease-out'))
  //   ])
  // ]


})
export class GreetingComponent implements OnInit {
  imageURL = environment.imageURL;
  greeting= {
    username: "Sachin Shrivastava",
    title: "Hi all, I'm Sachin Shrivastava",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web applications with JavaScript / AngularJs / ReactJs / Nodejs / CodeIgniter and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1IiGB414aFQJDdS4TyndekOSxWuhBr1_f/view?usp=drivesdk"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
