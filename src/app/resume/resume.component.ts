import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppService } from './../services/app.service';
import { Resume } from './../model/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})

export class ResumeComponent implements OnInit {
  @Output() downloadPDF = new EventEmitter<void>();
  resume: Resume;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getResume().subscribe(response => this.resume = response.json());
  }

  download() {
    this.downloadPDF.emit();
  }
}
