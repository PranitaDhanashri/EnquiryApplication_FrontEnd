import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] | undefined;
  successMessage: string | undefined;

  constructor(private customerService: CustomerService, private router: Router) {

  }

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.GetAllCustomers().subscribe({
      next: (res) => {
        if (res.status == 200 && res.body != null) {
          console.log(res.body);
          this.customers = res.body;
        }
      }
    })
  }

  deleteCustomer(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this customer?');
    if (isConfirmed) {
      this.customerService.DeleteCourse(id).subscribe({
        next: (res) => {
          if (res.status == 200) {
            console.log(res.status);
            this.successMessage = "Customer deleted successfully";
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
