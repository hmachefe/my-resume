import { Component, Input } from '@angular/core';
import { Language, Global } from './../../model/resume.model';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  @Input() global: Global;
  @Input() languages: Language[];
}
