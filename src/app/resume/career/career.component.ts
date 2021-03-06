import { Component, Input } from '@angular/core';
import { Career, Global } from './../../model/resume.model';
import { Presentation } from './../../shared/presentation/presentation.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  @Input() global: Global;
  @Input() jobs: Career[];

  getPresentation(job: Career) {
    const presentation = new Presentation();
    presentation.title = job.company;
    presentation.subtitle = job.status;
    presentation.detail = job.quote;
    presentation.logo = job.logo;
    presentation.date = job.date;
    presentation.description = job.description;
    presentation.tags = [job.location];
    return presentation;
  }
}
