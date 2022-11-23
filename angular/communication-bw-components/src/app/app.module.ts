import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApprehensionComponent } from './apprehension/apprehension.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ApprehensionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
