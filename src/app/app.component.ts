import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('root') root: ElementRef;
  @ViewChild('container') container: ElementRef;

  moveBackground(event: MouseEvent) {
    this.moveRootBackground(event);
    this.moveContainerBackground(event);
  }

  moveRootBackground(event: MouseEvent) {
    this.root.nativeElement.style.backgroundPositionX = - (event.x / 20).toString() + 'px';
    this.root.nativeElement.style.backgroundPositionY = - (event.y / 20).toString() + 'px';
  }

  moveContainerBackground(event: MouseEvent) {
    this.container.nativeElement.style.backgroundPositionX = - (event.x / 40).toString() + 'px';
    this.container.nativeElement.style.backgroundPositionY = - (event.y / 40).toString() + 'px';
  }
}
