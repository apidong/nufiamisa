import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    CommonModule,

  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
