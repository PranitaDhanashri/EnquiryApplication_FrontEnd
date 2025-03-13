import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { BusinessSegmentAddComponent } from './business-segment-add/business-segment-add.component';
import { BusinessSegmentListComponent } from './business-segment-list/business-segment-list.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { EngineerAddComponent } from './engineer-add/engineer-add.component';
import { EnquiryTypeAddComponent } from './enquiry-type-add/enquiry-type-add.component';
import { EnquiryTypeListComponent } from './enquiry-type-list/enquiry-type-list.component';
import { StatusTypeListComponent } from './status-type-list/status-type-list.component';
import { StatusTypeAddComponent } from './status-type-add/status-type-add.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    DashboardComponent,
    CustomerAddComponent,
    CustomerListComponent,
    BusinessSegmentAddComponent,
    BusinessSegmentListComponent,
    EngineerListComponent,
    EngineerAddComponent,
    EnquiryTypeAddComponent,
    EnquiryTypeListComponent,
    StatusTypeListComponent,
    StatusTypeAddComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
