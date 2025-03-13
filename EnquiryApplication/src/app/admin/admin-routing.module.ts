import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { BusinessSegmentAddComponent } from './business-segment-add/business-segment-add.component';
import { BusinessSegmentListComponent } from './business-segment-list/business-segment-list.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { EngineerAddComponent } from './engineer-add/engineer-add.component';
import { EnquiryTypeListComponent } from './enquiry-type-list/enquiry-type-list.component';
import { EnquiryTypeAddComponent } from './enquiry-type-add/enquiry-type-add.component';
import { StatusTypeListComponent } from './status-type-list/status-type-list.component';
import { StatusTypeAddComponent } from './status-type-add/status-type-add.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'addCustomer/:id', component: CustomerAddComponent },
      { path: 'addCustomer', component: CustomerAddComponent },
      { path: 'businessSegment', component: BusinessSegmentListComponent },
      { path: 'addBusinessSegment', component: BusinessSegmentAddComponent },
      { path: 'addBusinessSegment/:id', component: BusinessSegmentAddComponent },
      { path: 'engineer', component: EngineerListComponent },
      { path: 'addEngineer', component: EngineerAddComponent },
      { path: 'addEngineer/:id', component: EngineerAddComponent },
      { path: 'enquiryType', component: EnquiryTypeListComponent },
      { path: 'addEnquiryType', component: EnquiryTypeAddComponent },
      { path: 'addEnquiryType/:id', component: EnquiryTypeAddComponent },
      { path: 'addStatusType', component: StatusTypeAddComponent },
      { path: 'addStatusType/:id', component: StatusTypeAddComponent },
      { path: 'statusType', component: StatusTypeListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
