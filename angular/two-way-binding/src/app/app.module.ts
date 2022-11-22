import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApprehensionComponent } from './apprehension/apprehension.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprehensionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
