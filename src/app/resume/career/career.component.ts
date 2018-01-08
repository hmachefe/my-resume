import { Component, OnInit, Input } from '@angular/core';
import { Career } from '../../model/resume.model';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})

export class CareerComponent {
  @Input() career: Career;
}
