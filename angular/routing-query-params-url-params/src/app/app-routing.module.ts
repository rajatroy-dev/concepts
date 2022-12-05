import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './apprehension/first-child/first-child.component';
import { SecondChildComponent } from './apprehension/second-child/second-child.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'first-child', component: FirstChildComponent },
  { path: 'first-child/:id', component: FirstChildComponent },
  { path: 'second-child', component: SecondChildComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
