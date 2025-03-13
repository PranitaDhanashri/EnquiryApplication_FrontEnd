import { Component } from '@angular/core';
import { BusinessSegment } from '../../models/businessSegment';
import { BusinessSegmentService } from '../../services/business-segment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-segment-list',
  templateUrl: './business-segment-list.component.html',
  styleUrl: './business-segment-list.component.css'
})
export class BusinessSegmentListComponent {
  segments: BusinessSegment[] | undefined;
  successMessage: string | undefined;

  constructor(private businessService: BusinessSegmentService, private router: Router) {

  }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.businessService.GetAllBusinessSegments().subscribe({
      next: (res) => {
        if (res.status == 200 && res.body != null) {
          console.log(res.body);
          this.segments = res.body;
        }
      }
    })
  }

  deleteSegment(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this segment?');
    if (isConfirmed) {
      this.businessService.DeleteBusinessSegment(id).subscribe({
        next: (res) => {
          if (res.status == 200) {
            console.log(res.status);
            this.successMessage = "Segment deleted successfully";
            setTimeout(() => {
              this.successMessage = '';
            }, 3000);
            this.loadCustomers();
          }
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
