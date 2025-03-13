import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  console.log("In guard");
  if (authService.user == undefined) {
    router.navigate(['login']);
    return true;
  }
  //authorization
  else if (authService.user.Role?.indexOf('Admin') != -1) {
    return true;
  }
  else {
    router.navigate(['unauthorize']);
    return true;
  }
};
