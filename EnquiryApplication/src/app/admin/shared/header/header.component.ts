import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: User | any;
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.user;
  }

  logOut() {
    this.authService.RemoveAuthUser();
    this.user = this.authService.user;
    return this.router.navigate(['/login']);
  }

}
