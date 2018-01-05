import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('anim', [
        state('on', style({
        })),
        transition('* => *', animate('1s ease-in')),
    ]),
  ]
})
export class ResumeComponent implements OnInit {
  state: string;

  constructor() { }

  ngOnInit() {
  }
}
