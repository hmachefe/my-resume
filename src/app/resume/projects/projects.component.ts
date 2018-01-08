import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../model/resume.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() projects: Project[];
}
