import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app.service';
import { Resume } from './../../model/resume.model';

@Component({
  selector: 'app-pdf-template',
  templateUrl: './pdf-template.component.html',
  styleUrls: ['./pdf-template.component.scss'],
})
export class PdfTemplateComponent implements OnInit {
  resume: Resume;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getResume().subscribe(response => this.resume = response.json());
  }
}
