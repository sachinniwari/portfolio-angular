import {Component, Input, OnInit} from '@angular/core';
import ngColorThief from 'angular-colorthief';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  imageURL = environment.imageURL;
@Input() experience;
  constructor() { }

  // angular.module('yourApp', ['ngColorThief'])
  ngOnInit(): void {
  }

}
