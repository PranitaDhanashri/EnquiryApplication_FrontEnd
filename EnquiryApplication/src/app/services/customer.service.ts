import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetAllCustomers(): Observable<HttpResponse<Customer[]>> {
    return this.httpClient.get<Customer[]>(environment.apiAddress + '/Customer/GetAllCustomer', { headers: this.httpHeaders, observe: 'response' })
  }

  AddCustomer(customer: Customer): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/Customer/AddCustomer', JSON.stringify(customer), { headers: this.httpHeaders, observe: 'response' })
  }

  UpdateCustomer(customer: Customer): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/Customer/UpdateCustomer', JSON.stringify(customer), { headers: this.httpHeaders, observe: 'response' })
  }

  DeleteBusinessSegment(customerId: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(environment.apiAddress + '/Customer/DeleteCustomer?customerId=' + customerId, { headers: this.httpHeaders, observe: 'response' });
  }

  GetCustomer(customerId: number): Observable<HttpResponse<Customer>> {
    return this.httpClient.get<Customer>(environment.apiAddress + '/Customer/GetCustomer?customerId=' + customerId, { headers: this.httpHeaders, observe: 'response' });
  }
}
