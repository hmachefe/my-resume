import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopcardComponent } from './resume/topcard/topcard.component';
import { EducationComponent } from './resume/education/education.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { CareerComponent } from './resume/career/career.component';
import { LanguagesComponent } from './resume/languages/languages.component';

import { AppService } from './services/app.service';
import { ResumeModule } from './resume/resume.module';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ResumeModule,
  ],
  providers: [
    AppService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
