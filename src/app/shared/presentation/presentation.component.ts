import { Component, Input } from '@angular/core';
import { Link } from './../../model/resume.model';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})

export class PresentationComponent {
  @Input() presentation: Presentation;
}

export class Presentation {
  logo: string;
  title: string;
  subtitle: string;
  detail: string;
  description: string[];
  date: string;
  tags: string[];
  links: Link[];
}
