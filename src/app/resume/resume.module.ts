import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopcardComponent } from './topcard/topcard.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerComponent } from './career/career.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { ResumeComponent } from './resume.component';
import { SharedModule } from './../shared/shared.module';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PdfTemplateComponent } from './pdf-template/pdf-template.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

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
    PdfTemplateComponent,
  ],
  exports: [
    ResumeComponent,
    PdfTemplateComponent
  ]
})

export class ResumeModule { }
