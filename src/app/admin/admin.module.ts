import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TestsComponent } from './tests/tests.component';
import { TestComponent } from './tests/test/test.component';
import { ProfilsComponent } from './profils/profils.component';


@NgModule({
  declarations: [
    TestsComponent,
    TestComponent,
    ProfilsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
