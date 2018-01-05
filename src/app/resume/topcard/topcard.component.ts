import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topcard',
  templateUrl: './topcard.component.html',
  styleUrls: ['./topcard.component.scss']
})
export class TopcardComponent implements OnInit {
  name: string;
  position: string;
  company: string;
  location: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Dimitri Buhon';
    this.position = 'Software Engineer';
    this.company = 'Neos-SDI';
    this.location = 'Paris Area, France';
  }
}
