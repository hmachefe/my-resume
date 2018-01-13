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
    this.appService.getResume().subscribe(response => {
      const resume = response.json();
      this.reduceResume(resume);
      this.resume = resume;
    });
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
