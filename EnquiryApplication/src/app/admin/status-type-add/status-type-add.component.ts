import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusTypeService } from '../../services/status-type.service';

@Component({
  selector: 'app-status-type-add',
  templateUrl: './status-type-add.component.html',
  styleUrl: './status-type-add.component.css'
})
export class StatusTypeAddComponent {
  statusTypeForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private statusTypeService: StatusTypeService, private route: ActivatedRoute) {
    this.statusTypeForm = this.fb.group({
      statusID: 0,
      type: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id != undefined) {
        this.statusTypeService.GetStatusType(id).subscribe({
          next: (res) => {
            if (res.status == 200 && res.body != null) {
              let status = res.body;
              this.statusTypeForm.controls['statusID'].setValue(status.StatusID);
              this.statusTypeForm.controls['type'].setValue(status.Type);
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }

  saveStatusType() {
    if (this.statusTypeForm.valid) {
      console.log(this.statusTypeForm.controls["statusID"].value);
      if (this.statusTypeForm.controls["statusID"].value == undefined || this.statusTypeForm.controls["statusID"].value == 0) {
        this.statusTypeService.AddStatusType(this.statusTypeForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Status type added successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/statusType']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Status type add failed", error);
          }
        });
      }
      else {
        this.statusTypeService.UpdateStatusType(this.statusTypeForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Status type updated successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/statusType']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Status type update failed", error);
          }
        });
      }
    }
  }
}

