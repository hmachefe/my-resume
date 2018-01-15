import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { ResumeModule } from './resume/resume.module';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopcardComponent } from './resume/topcard/topcard.component';
import { EducationComponent } from './resume/education/education.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { CareerComponent } from './resume/career/career.component';
import { LanguagesComponent } from './resume/languages/languages.component';

import { AppService } from './services/app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    ResumeModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
