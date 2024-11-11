import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import * as FileSaver from 'file-saver';

const culture = navigator.language.includes('fr') ? 'fr' : 'en';

@Injectable()
export class AppService {
  private readonly resume = `./assets/data/${culture}.resume.json`;
  private readonly resumePDF = `./assets/data/${culture}.resume.pdf`;

  constructor(private http: Http) {}

  getResume() {
    return this.http.get(this.resume);
  }

  getLocalResumePDF() {
    const pdf = this.http.get(this.resumePDF, { responseType: ResponseContentType.Blob }).subscribe(response => {
      const blob = new Blob([response.blob()], { type: 'application/pdf' });
      FileSaver.saveAs(blob, 'hugo-machefer-cv.pdf');
    });
  }
}
