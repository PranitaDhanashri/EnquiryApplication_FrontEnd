import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { User } from '../models/user';

export const serverInterceptor: HttpInterceptorFn = (req, next) => {
  let user: User | undefined;
  let authService = inject(AuthService);
  user = authService.user
  if (user != undefined) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.Token}`
      }
    })
  }
  console.log("In interceptor, JWT :", user?.Token);
  return next(req);
};
