import { Component, Input } from '@angular/core';
import { Ability } from './../../model/resume.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {
  @Input() abilities: Ability[];
}
