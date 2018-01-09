import { Component } from '@angular/core';
import { AppService } from './services/app.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('root') root: any;

  moveBackground(event: MouseEvent) {
    this.root.nativeElement.style.backgroundPositionX = (event.x / 20).toString() + 'px';
    this.root.nativeElement.style.backgroundPositionY = (event.y / 20).toString() + 'px';
  }
}
