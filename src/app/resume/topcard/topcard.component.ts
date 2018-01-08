import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../../model/resume.model';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-topcard',
  templateUrl: './topcard.component.html',
  styleUrls: ['./topcard.component.scss']
})

export class TopcardComponent {
  @Input() info: Info;
}
