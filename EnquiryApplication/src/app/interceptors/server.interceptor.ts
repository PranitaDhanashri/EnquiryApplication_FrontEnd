import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { User } from '../models/user';
import { Login } from '../models/login';

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
  return next(req);
};
