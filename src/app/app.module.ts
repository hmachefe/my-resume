import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopcardComponent } from './resume/topcard/topcard.component';
import { EducationComponent } from './resume/education/education.component';
import { PositionsComponent } from './resume/positions/positions.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { SkillsComponent } from './resume/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TopcardComponent,
    SkillsComponent,
    PositionsComponent,
    ProjectsComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
