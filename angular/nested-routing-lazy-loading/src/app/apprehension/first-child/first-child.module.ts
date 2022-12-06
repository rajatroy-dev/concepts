import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstChildRoutingModule } from './first-child-routing.module';
import { FirstChildComponent } from './first-child.component';
import { FirstNestedComponent } from './first-nested/first-nested.component';


@NgModule({
  declarations: [
    FirstChildComponent,
    FirstNestedComponent
  ],
  imports: [
    CommonModule,
    FirstChildRoutingModule
  ]
})
export class FirstChildModule { }
