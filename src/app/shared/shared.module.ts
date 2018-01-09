import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label/label.component';
import { PresentationComponent } from './presentation/presentation.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LabelComponent,
    PresentationComponent,
    RatingComponent
  ],
  exports: [
    LabelComponent,
    PresentationComponent,
    RatingComponent
  ],
})
export class SharedModule { }
