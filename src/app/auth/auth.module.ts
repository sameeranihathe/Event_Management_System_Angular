import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormioAuth, FormioAuthRoutes } from 'angular-formio/auth';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ],
  declarations: []
})
export class AuthModule { }
