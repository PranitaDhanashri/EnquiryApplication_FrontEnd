import { Component } from '@angular/core';
import { Engineer } from '../../models/engineer';
import { EngineerService } from '../../services/engineer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrl: './engineer-list.component.css'
})
export class EngineerListComponent {
  engineers: Engineer[] | undefined;
  successMessage: string | undefined;

  constructor(private engineerService: EngineerService, private router: Router) { }

  ngOnInit() {
    this.loadEngineers();
  }

  loadEngineers() {
    this.engineerService.GetAllEngineers().subscribe({
      next: (res) => {
        if (res.status == 200 && res.body != null) {
          console.log(res.body);
          this.engineers = res.body;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  deleteEngineer(id: number) {
    const isConfirmed = window.confirm('Are you sure you want to delete this engineer?');
    if (isConfirmed) {
      this.engineerService.DeleteEngineer(id).subscribe({
        next: (res) => {
          if (res.status == 200) {
            console.log(res.status);
            this.successMessage = "Engineer deleted successfully";
            setTimeout(() => {
              this.successMessage = '';
            }, 3000);
            this.loadEngineers();
          }
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
  }
}

