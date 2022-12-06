import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondChildRoutingModule } from './second-child-routing.module';
import { SecondChildComponent } from './second-child.component';
import { SecondNestedComponent } from './second-nested/second-nested.component';


@NgModule({
  declarations: [
    SecondChildComponent,
    SecondNestedComponent
  ],
  imports: [
    CommonModule,
    SecondChildRoutingModule
  ]
})
export class SecondChildModule { }
