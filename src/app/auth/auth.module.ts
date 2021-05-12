import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AuthComponent,LoginComponent, RegistrationComponent, ChangePasswordComponent, ForgotPasswordComponent, TermsandconditionsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
