import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css',
})
export class CustomerAddComponent implements OnInit {
  customerForm: FormGroup;
  successMessage: string = '';
  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService, private route: ActivatedRoute) {

    this.customerForm = this.fb.group({
      customerId: [0],
      name: [null, Validators.required],
      contactPerson: [null],
      contactNumber: [null, [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]],
      alternativeNumber: [null],
      emailId: [null, [Validators.required, Validators.email]],
      address: [null]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log(params);
      if (id != undefined) {
        this.customerService.GetCustomer(id).subscribe({
          next: (res) => {
            if (res.status == 200 && res.body != null) {
              let customer = res.body;
              this.customerForm.controls['customerId'].setValue(customer.CustomerID);
              this.customerForm.controls['name'].setValue(customer.Name);
              this.customerForm.controls['contactPerson'].setValue(customer.ContactPerson);
              this.customerForm.controls['contactNumber'].setValue(customer.ContactNumber);
              this.customerForm.controls['alternativeNumber'].setValue(customer.AlternativeNumber);
              this.customerForm.controls['emailId'].setValue(customer.EmailID);
              this.customerForm.controls['address'].setValue(customer.Address);
            }
          },
          error: (error) => {
            console.log(error);
          }
        })
      }
    })
  }

  saveCustomer() {
    if (this.customerForm.valid) {
      console.log(this.customerForm.controls["customerId"].value);
      if (this.customerForm.controls["customerId"].value == undefined || this.customerForm.controls["customerId"].value == 0) {
        this.customerService.AddCustomer(this.customerForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Customer added successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/customer']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Customer add failed", error);
          }
        });
      }
      else {
        this.customerService.UpdateCustomer(this.customerForm.value).subscribe({
          next: (res) => {
            if (res.status == 201) {
              this.successMessage = "Customer updated successfully";
              setTimeout(() => {
                this.router.navigate(['/admin/customer']);
              }, 1500);
            }
          },
          error: (error) => {
            console.log("Customer update failed", error);
          }
        });
      }
    }
  }
}
