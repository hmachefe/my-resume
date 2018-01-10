import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../model/resume.model';
import { Presentation } from '../../shared/presentation/presentation.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  @Input() projects: Project[];

  getPresentation(project: Project) {
    const presentation = new Presentation();
    presentation.title = project.title;
    presentation.subtitle = project.detail;
    presentation.detail = project.quote;
    presentation.description = project.description;
    presentation.tags = project.tags;
    presentation.links = project.links;
    return presentation;
  }
}
