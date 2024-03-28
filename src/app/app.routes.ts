import { Routes } from '@angular/router';
import {LandingComponent} from "./components/pages/landing/landing.component";
import {LoginComponent} from "./components/pages/login/login.component";
import {RegisterComponent} from "./components/pages/register/register.component";
import {HomeComponent} from "./components/pages/home/home.component";
import {ForgotPasswordComponent} from "./components/pages/forgot-password/forgot-password.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'forgotpass',
    component: ForgotPasswordComponent
  }

];

