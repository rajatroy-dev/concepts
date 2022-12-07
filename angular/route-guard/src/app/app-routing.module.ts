import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './apprehension/first-child/first-child.component';
import { LoginComponent } from './apprehension/login/login.component';
import { NotFoundComponent } from './apprehension/not-found/not-found.component';
import { SecondChildComponent } from './apprehension/second-child/second-child.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'first-child', pathMatch: 'full' },
  { path: 'first-child', component: FirstChildComponent, canActivate: [AuthGuard] },
  { path: 'second-child', component: SecondChildComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
