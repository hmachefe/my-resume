import { Component, Input } from '@angular/core';
import { Skill } from './../../model/resume.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  private readonly max = 5;
  stars: boolean[];

  private _skill: Skill;
  get skill() { return this._skill; }
  @Input() set skill(value: Skill) { this._skill = value; this.setPercent(value.level); }

  constructor() {
    this.initStars(this.max);
  }

  private initStars(numberOfStars: number) {
    this.stars = [];
    for (let i = 0; i < numberOfStars; ++i) {
      this.stars.push(false);
    }
  }

  private setPercent(percent: number) {
    const value = Math.round(percent * this.max / 100);
    for (let i = 0; i < this.stars.length; ++i) {
      this.stars[i] = value > i ? true : false;
    }
  }
}
