import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from './../../model/resume.model';

@Component({
  selector: 'app-topcard',
  templateUrl: './topcard.component.html',
  styleUrls: ['./topcard.component.scss']
})

export class TopcardComponent {
  @Input() info: Info;
  @Output() downloadPDF = new EventEmitter<void>();

  download() {
    this.downloadPDF.emit();
  }
}
