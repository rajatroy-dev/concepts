import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApprehensionComponent } from './apprehension/apprehension.component';
import { BehaviorSubjectService } from './shared/behavior-subject.service';
import { ReplaySubjectService } from './shared/replay-subject.service';
import { SubjectService } from './shared/subject.service';

@NgModule({
  declarations: [
    AppComponent,
    ApprehensionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SubjectService,
    ReplaySubjectService,
    BehaviorSubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
