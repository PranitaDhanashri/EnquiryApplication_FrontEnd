import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnquiryType } from '../models/enquiry-type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnquiryTypeService {

  httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetEnquiryTypes(): Observable<HttpResponse<EnquiryType[]>> {
    return this.httpClient.get<EnquiryType[]>(environment.apiAddress + '/EnquiryType/GetAllEnquiryTypes', { headers: this.httpHeaders, observe: 'response' })
  }

  AddEnquiryType(type: EnquiryType): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/EnquiryType/AddEnquiryType', JSON.stringify(type), { headers: this.httpHeaders, observe: 'response' })
  }

  UpdateEnquiryType(type: EnquiryType): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/EnquiryType/UpdateEnquiryType', JSON.stringify(type), { headers: this.httpHeaders, observe: 'response' })
  }

  DeleteEnquiryType(id: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(environment.apiAddress + '/EnquiryType/DeleteEnquiryType?id=' + id, { headers: this.httpHeaders, observe: 'response' });
  }

  GetEnquiryType(id: number): Observable<HttpResponse<EnquiryType>> {
    return this.httpClient.get<EnquiryType>(environment.apiAddress + '/EnquiryType/GetEnquiryType?id=' + id, { headers: this.httpHeaders, observe: 'response' });
  }
}

