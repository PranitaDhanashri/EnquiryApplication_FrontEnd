import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css',
})
export class CustomerAddComponent {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.customerForm = this.fb.group({
      firstName: [null, Validators.required],
      middleName: [null, Validators.required]
    })
  }
  saveCustomer() {

  }
}
