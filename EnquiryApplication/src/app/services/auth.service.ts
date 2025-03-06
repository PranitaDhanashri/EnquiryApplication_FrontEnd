import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined;
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  LoginUser(model: Login): Observable<HttpResponse<User>> {
    console.log("in auth service");
    return this.httpClient.post<User>(environment.apiAddress + '/Account/Login', JSON.stringify(model), { headers: this.httpHeaders, observe: 'response' })
  }
}
