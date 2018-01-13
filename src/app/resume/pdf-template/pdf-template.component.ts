import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './../../services/app.service';
import { Resume } from './../../model/resume.model';
import { AfterViewInit, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-pdf-template',
  templateUrl: './pdf-template.component.html',
  styleUrls: ['./pdf-template.component.scss'],
})
export class PDFTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('pdf') pdfExport;
  resume: Resume;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getResume().subscribe(response => {
      const resume = response.json();
      this.reduceResume(resume);
      this.resume = resume;
    });
  }

  ngAfterViewInit() {
  }

  exportPDF() {
    this.pdfExport.saveAs('dimitri-buhon-cv.pdf')
  }

  private reduceResume(resume: Resume) {
    this.reduceCareer(resume);
  }

  private reduceCareer(resume: Resume) {
    resume.career = resume.career.filter(career => career.description && career.description.length > 0);
    resume.career.length = 3;

    resume.career.forEach(job => {
      job.quote = null;
      job.location = null;
      job.logo = null;
    });
  }
}
