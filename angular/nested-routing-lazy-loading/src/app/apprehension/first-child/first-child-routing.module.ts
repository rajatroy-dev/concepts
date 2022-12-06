import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './first-child.component';
import { FirstNestedComponent } from './first-nested/first-nested.component';

const routes: Routes = [
  { path: '', component: FirstChildComponent },
  { path: 'first-nested', component: FirstNestedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstChildRoutingModule { }
