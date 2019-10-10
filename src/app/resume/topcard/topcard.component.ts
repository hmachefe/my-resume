import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Info, Global } from './../../model/resume.model';

@Component({
  selector: 'app-topcard',
  templateUrl: './topcard.component.html',
  styleUrls: ['./topcard.component.scss']
})
export class TopcardComponent {
  @Input() global: Global;
  @Input() info: Info;
  @Output() downloadPDF = new EventEmitter<void>();

  download() {
    this.downloadPDF.emit();
  }
}
