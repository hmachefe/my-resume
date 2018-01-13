import { Component, OnInit, Input } from '@angular/core';
import { Education } from './../../model/resume.model';
import { Presentation } from './../../shared/presentation/presentation.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})

export class EducationComponent {
  @Input() education: Education[];

  getPresentation(formation: Education) {
    const presentation = new Presentation();
    presentation.title = formation.diploma;
    presentation.subtitle = formation.school;
    presentation.detail = formation.detail;
    presentation.description = [formation.quote];
    presentation.date = formation.date;
    presentation.tags = [formation.location];
    presentation.logo = formation.logo;
    presentation.links = [formation.link];
    return presentation;
  }
}
