import { Component, OnInit, Input } from '@angular/core';
import { Career } from '../../model/resume.model';
import { Presentation } from '../../presentation/presentation.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})

export class CareerComponent {
  @Input() jobs: Career[];

  getPresentation(job: Career) {
    const presentation = new Presentation();
    presentation.title = job.company;
    presentation.subtitle = job.status;
    presentation.detail = job.quote;
    presentation.logo = job.logo;
    presentation.date = job.date;
    presentation.description = job.description;
    return presentation;
  }
}
