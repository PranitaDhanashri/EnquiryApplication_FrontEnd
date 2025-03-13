import { Component } from '@angular/core';
import { StatusType } from '../../models/status-type';
import { StatusTypeService } from '../../services/status-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-type-list',
  templateUrl: './status-type-list.component.html',
  styleUrl: './status-type-list.component.css'
})
export class StatusTypeListComponent {
  statusTypes: StatusType[] | undefined;
  successMessage: string | undefined;

  constructor(private statusTypeService: StatusTypeService, private router: Router) {

  }

  ngOnInit() {
    this.loadStatusTypes();
  }

  loadStatusTypes() {
    this.statusTypeService.GetAllStatusTypes().subscribe({
      next: (res) => {
        if (res.status == 200 && res.body != null) {
          console.log(res.body);
          this.statusTypes = res.body;
        }
      }
    })
  }

  deleteStatusType(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this status type?');
    if (isConfirmed) {
      this.statusTypeService.DeleteStatusType(id).subscribe({
        next: (res) => {
          if (res.status == 200) {
            console.log(res.status);
            this.successMessage = "Status Type deleted successfully";
            setTimeout(() => {
              this.successMessage = '';
            }, 3000);
            this.loadStatusTypes();
          }
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}
