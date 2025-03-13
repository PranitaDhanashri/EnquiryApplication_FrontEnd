import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Engineer } from '../models/engineer';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {
  httpHeaders: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetAllEngineers(): Observable<HttpResponse<Engineer[]>> {
    return this.httpClient.get<Engineer[]>(environment.apiAddress + '/Engineer/GetAllEngineers', { headers: this.httpHeaders, observe: 'response' });
  }
  AddEngineer(engineer: Engineer): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/Engineer/AddEngineer', JSON.stringify(engineer), { headers: this.httpHeaders, observe: 'response' })
  }

  UpdateEngineer(engineer: Engineer): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/Engineer/UpdateEngineer', JSON.stringify(engineer), { headers: this.httpHeaders, observe: 'response' })
  }

  DeleteEngineer(engId: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(environment.apiAddress + '/Engineer/DeleteEngineer?engineerId=' + engId, { headers: this.httpHeaders, observe: 'response' });
  }

  GetEngineer(engId: number): Observable<HttpResponse<Engineer>> {
    return this.httpClient.get<Engineer>(environment.apiAddress + '/Engineer/GetEngineer?engineerId=' + engId, { headers: this.httpHeaders, observe: 'response' });
  }
}
