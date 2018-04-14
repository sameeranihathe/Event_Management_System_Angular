import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'angular-formio/resource';


@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ],
  declarations: []
})
export class EventModule { }
