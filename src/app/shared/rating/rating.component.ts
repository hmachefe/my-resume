import { Component, Input } from '@angular/core';
import { Skill } from './../../model/resume.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  private readonly max = 5;
  stars: ('full' | 'half' | 'empty')[];  // Modify the array to accept 'half' values

  private _skill: Skill;
  get skill() { return this._skill; }
  @Input() set skill(value: Skill) { this._skill = value; this.setPercent(value.level); }

  constructor() {
    this.initStars(this.max);
  }

  private initStars(numberOfStars: number) {
    this.stars = Array(numberOfStars).fill('empty');  // Initialize with 'empty'
  }

  private setPercent(percent: number) {
    const fullStars = Math.floor(percent / 20);  // Number of fully filled circles
    const halfStar = percent % 20 >= 10;  // Determine if there should be a half-filled circle

    this.stars = this.stars.map((_, index) => {
      if (index < fullStars) {
        return 'full';
      } else if (index === fullStars && halfStar) {
        return 'half';
      } else {
        return 'empty';
      }
    });
  }
}
