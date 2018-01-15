import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

import { TopcardComponent } from './topcard/topcard.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerComponent } from './career/career.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { ResumeComponent } from './resume.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PDFTemplateComponent } from './pdf-template/pdf-template.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PDFExportModule,
  ],
  declarations: [
    ResumeComponent,
    TopcardComponent,
    SkillsComponent,
    CareerComponent,
    ProjectsComponent,
    EducationComponent,
    LanguagesComponent,
    HobbiesComponent,
    PDFTemplateComponent,
  ],
  exports: [
    ResumeComponent,
  ]
})

export class ResumeModule { }
