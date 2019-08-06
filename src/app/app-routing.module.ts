import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'portal/homepage',  component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
