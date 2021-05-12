import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';


const routes: Routes = [
{path:'',redirectTo:'login'},
{
  path:'',component:AuthComponent,
  children:[
  { path:'login' ,component:LoginComponent},
  { path:'registration' ,component:RegistrationComponent},
  { path:'changepassword' ,component:ChangePasswordComponent},
  { path:'forgotpassword' ,component:ForgotPasswordComponent},
  { path:'terms' ,component:TermsandconditionsComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
