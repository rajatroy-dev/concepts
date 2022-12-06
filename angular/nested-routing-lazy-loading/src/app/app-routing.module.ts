import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first-child', loadChildren: () => import('./apprehension/first-child/first-child.module').then(m => m.FirstChildModule) },
  { path: 'second-child', loadChildren: () => import('./apprehension/second-child/second-child.module').then(m => m.SecondChildModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
