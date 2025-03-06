import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../../../assets/css/bootstrap.min.css',
    '../../../assets/font-awesome/4.5.0/css/font-awesome.min.css',
    '../../../assets/css/fonts.googleapis.com.css',
    '../../../assets/css/ace.min.css',
    '../../../assets/css/ace-rtl.min.css'
  ]
})
export class LoginComponent {
  userForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.userForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required]
    });
    this.errorMessage = "";
  }

  userLogin() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.authService.LoginUser(this.userForm.value).subscribe({
        next: (res) => {
          console.log('Login successful:', res);
          if (res.body != null) {
            let user: User = res.body;
            console.log(user.Role);
            if (user.Role == "Admin") {
              this.router.navigate(['/admin']);
            }
          }
        },
        error: (error) => {
          this.errorMessage = error.error.message;
          console.error('Login failed:', error.message);
        }

      })

    }
  }
}
