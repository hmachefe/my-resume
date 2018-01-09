import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopcardComponent } from './topcard/topcard.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerComponent } from './career/career.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { ResumeComponent } from './resume.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ResumeComponent,
    TopcardComponent,
    SkillsComponent,
    CareerComponent,
    ProjectsComponent,
    EducationComponent,
    LanguagesComponent,
  ],
  exports: [
    ResumeComponent,
  ]
})

export class ResumeModule { }
