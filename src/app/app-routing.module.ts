import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from '../app/signin/signin.component'
import {HomeComponent} from '../app/home/home.component'
import {ProfileComponent} from '../app/profile/profile.component'
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'usersignin', component: SigninComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
