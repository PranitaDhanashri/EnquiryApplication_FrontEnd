import { Component } from '@angular/core';
import { EnquiryType } from '../../models/enquiry-type';
import { EnquiryTypeService } from '../../services/enquiry-type.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enquiry-type-list',
  templateUrl: './enquiry-type-list.component.html',
  styleUrl: './enquiry-type-list.component.css'
})
export class EnquiryTypeListComponent {
  enquiryTypes: EnquiryType[] | undefined;
  successMessage: string | undefined;

  constructor(private enquiryTypeService: EnquiryTypeService, private router: Router) {

  }

  ngOnInit() {
    this.loadEnquiryTypes();
  }

  loadEnquiryTypes() {
    this.enquiryTypeService.GetEnquiryTypes().subscribe({
      next: (res) => {
        if (res.status == 200 && res.body != null) {
          console.log(res.body);
          this.enquiryTypes = res.body;
        }
      }
    })
  }

  deleteEnquiryType(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this type?');
    if (isConfirmed) {
      this.enquiryTypeService.DeleteEnquiryType(id).subscribe({
        next: (res) => {
          if (res.status == 200) {
            console.log(res.status);
            this.successMessage = "Enquiry Type deleted successfully";
            setTimeout(() => {
              this.successMessage = '';
            }, 3000);
            this.loadEnquiryTypes();
          }
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
