import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AUTH_ID } from '../app.constants';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined;
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient, private utilService: UtilService) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
    this.LoadAuthUser();
  }

  LoginUser(model: Login): Observable<HttpResponse<User>> {
    console.log("in auth service");
    return this.httpClient.post<User>(environment.apiAddress + '/Account/Login', JSON.stringify(model), { headers: this.httpHeaders, observe: 'response' })
  }

  private LoadAuthUser() {
    const encData = localStorage.getItem(AUTH_ID);
    if (encData !== undefined && encData !== null) {
      this.user = this.utilService.Decrypt(encData);
    } else {
      this.user = undefined;
    }
    console.log(this.user);
  }

  SetAuthUser(user: User) {
    let userData = this.utilService.Encrypt(user);
    localStorage.setItem(AUTH_ID, userData);
    this.LoadAuthUser();
  }

  RemoveAuthUser() {
    const data = localStorage.getItem(AUTH_ID);
    if (data !== undefined && data !== null) {
      localStorage.removeItem(AUTH_ID);
      this.user = undefined;
    } else {
      this.user = undefined;
    }
    this.LoadAuthUser();
  }
}
