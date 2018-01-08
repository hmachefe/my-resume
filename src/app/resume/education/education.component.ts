import { Component, OnInit, Input } from '@angular/core';
import { Education } from '../../model/resume.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent {
  @Input() education: Education;
}
