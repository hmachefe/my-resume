import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AppService } from './../services/app.service';
import { Resume } from './../model/resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})

export class ResumeComponent implements OnInit {
  resume: Resume;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getResume().subscribe(response => this.resume = response.json());
  }
}
