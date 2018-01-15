import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './../services/app.service';
import { Resume } from './../model/resume.model';
import { PDFTemplateComponent } from './pdf-template/pdf-template.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})

export class ResumeComponent implements OnInit {
  @ViewChild('pdf') PDFTemplate: PDFTemplateComponent;
  resume: Resume;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getResume().subscribe(response => this.resume = response.json());
  }

  generatePDF() {
    this.PDFTemplate.exportPDF();
  }

  getLocalPDF() {
    this.appService.getLocalResumePDF();
  }
}
