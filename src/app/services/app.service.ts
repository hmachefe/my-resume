import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import * as FileSaver from 'file-saver';

@Injectable()
export class AppService {
  private readonly resume = './assets/data/fr.resume.json';
  private readonly resumePDF = './assets/data/fr.resume.pdf';

  constructor(private http: Http) {}

  getResume() {
    return this.http.get(this.resume);
  }

  getLocalResumePDF() {
    const pdf = this.http.get(this.resumePDF, { responseType: ResponseContentType.Blob }).subscribe(response => {
      const blob = new Blob([response.blob()], { type: 'application/pdf' });
      FileSaver.saveAs(blob, 'dimitri-buhon-cv.pdf');
    });
  }
}
