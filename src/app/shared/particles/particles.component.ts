import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/data/particles.json', () => console.log('callback - particles.js config loaded'));
  }
}
