import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EngineerService } from '../../services/engineer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-engineer-add',
  templateUrl: './engineer-add.component.html',
  styleUrl: './engineer-add.component.css'
})
export class EngineerAddComponent implements OnInit {
  engineerForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private engineerService: EngineerService) {
    this.engineerForm = this.fb.group({
      engId: [0],
      name: [null, Validators.required],
      contactNumber: [null, [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]],
      address: [null],
      dob: [null]
    })
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log(params);
      if (id != undefined) {
        this.engineerService.GetEngineer(id).subscribe({
          next: (res) => {
            if (res.status == 200 && res.body != null) {
              let engineer = res.body;
              this.engineerForm.controls['engId'].setValue(engineer.EngID);
              this.engineerForm.controls['name'].setValue(engineer.Name);
              this.engineerForm.controls['contactNumber'].setValue(engineer.ContactNumber);
              this.engineerForm.controls['address'].setValue(engineer.Address);
              this.engineerForm.controls['dob'].setValue(engineer.DOB);
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }

  saveEngineer() {
    if (this.engineerForm.valid) {
      console.log(this.engineerForm.controls["engId"].value);
      if (this.engineerForm.controls["engId"].value == undefined || this.engineerForm.controls["engId"].value == 0) {
        this.engineerService.AddEngineer(this.engineerForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Engineer added successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/engineer']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Engineer add failed", error);
          }
        });
      }
      else {
        this.engineerService.UpdateEngineer(this.engineerForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Engineer updated successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/engineer']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Engineer update failed", error);
          }
        });
      }
    }
  }
}
