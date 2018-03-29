import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RatingComponent } from './rating/rating.component';
import { LinkComponent } from './link/link.component';
import { ParticlesComponent } from './particles/particles.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LabelComponent,
    PresentationComponent,
    RatingComponent,
    LinkComponent,
    ParticlesComponent,
  ],
  exports: [
    LabelComponent,
    PresentationComponent,
    RatingComponent,
    LinkComponent,
    ParticlesComponent,
  ],
})
export class SharedModule { }
