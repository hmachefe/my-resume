import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Info, Global, Language } from './../../model/resume.model';

@Component({
  selector: 'app-topcard',
  templateUrl: './topcard.component.html',
  styleUrls: ['./topcard.component.scss']
})
export class TopcardComponent {
  @Input() global: Global;
  @Input() info: Info;
  @Input() languages: Language[];
  @Output() downloadPDF = new EventEmitter<void>();

  download() {
    this.downloadPDF.emit();
  }
}
