import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resume } from './../model/resume.model';

@Injectable()
export class AppService {
  private readonly resume = './assets/data/fr.resume.json';

  constructor(private http: Http) {}

  getResume() {
    return this.http.get(this.resume);
  }

  downloadResumePDF() {

  }
}
