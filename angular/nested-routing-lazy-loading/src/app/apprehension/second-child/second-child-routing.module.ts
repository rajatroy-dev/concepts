import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondChildComponent } from './second-child.component';
import { SecondNestedComponent } from './second-nested/second-nested.component';

const routes: Routes = [
  { path: '', component: SecondChildComponent },
  { path: 'second-nested', component: SecondNestedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondChildRoutingModule { }
