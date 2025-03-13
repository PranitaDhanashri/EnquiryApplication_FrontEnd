import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessSegmentService } from '../../services/business-segment.service';

@Component({
  selector: 'app-business-segment-add',
  templateUrl: './business-segment-add.component.html',
  styleUrl: './business-segment-add.component.css'
})
export class BusinessSegmentAddComponent implements OnInit {
  segmentForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private businessService: BusinessSegmentService, private route: ActivatedRoute) {
    this.segmentForm = this.fb.group({
      businessID: 0,
      segment: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id != undefined) {
        this.businessService.GetBusinessSegment(id).subscribe({
          next: (res) => {
            if (res.status == 200 && res.body != null) {
              let segment = res.body;
              this.segmentForm.controls['businessID'].setValue(segment.BusinessID);
              this.segmentForm.controls['segment'].setValue(segment.Segment);
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }

  saveSegment() {
    if (this.segmentForm.valid) {
      console.log(this.segmentForm.controls["businessID"].value);
      if (this.segmentForm.controls["businessID"].value == undefined || this.segmentForm.controls["businessID"].value == 0) {
        this.businessService.AddBusinessSegment(this.segmentForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Segment added successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/businessSegment']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Segment add failed", error);
          }
        });
      }
      else {
        this.businessService.UpdateBusinessSegment(this.segmentForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Segment updated successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/businessSegment']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Segment update failed", error);
          }
        });
      }
    }
  }
}
