import { Component, Input } from '@angular/core';
import { Ability, Global } from './../../model/resume.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() global: Global;
  @Input() abilities: Ability[];
}
