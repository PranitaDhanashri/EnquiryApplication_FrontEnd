import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryTypeService } from '../../services/enquiry-type.service';
@Component({
  selector: 'app-enquiry-type-add',
  templateUrl: './enquiry-type-add.component.html',
  styleUrl: './enquiry-type-add.component.css'
})
export class EnquiryTypeAddComponent {

  enquiryTypeForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private enquiryTypeService: EnquiryTypeService, private route: ActivatedRoute) {
    this.enquiryTypeForm = this.fb.group({
      id: 0,
      type: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id != undefined) {
        this.enquiryTypeService.GetEnquiryType(id).subscribe({
          next: (res) => {
            if (res.status == 200 && res.body != null) {
              let enquiryType = res.body;
              this.enquiryTypeForm.controls['id'].setValue(enquiryType.Id);
              this.enquiryTypeForm.controls['type'].setValue(enquiryType.Type);
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }

  saveEnquiryType() {
    if (this.enquiryTypeForm.valid) {
      console.log(this.enquiryTypeForm.controls["id"].value);
      if (this.enquiryTypeForm.controls["id"].value == undefined || this.enquiryTypeForm.controls["id"].value == 0) {
        this.enquiryTypeService.AddEnquiryType(this.enquiryTypeForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Enquiry Type added successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/enquiryType']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Enquiry Type add failed", error);
          }
        });
      }
      else {
        this.enquiryTypeService.UpdateEnquiryType(this.enquiryTypeForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Enquiry Type updated successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/enquiryType']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Enquiry Type update failed", error);
          }
        });
      }
    }
  }
}

