import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusinessSegment } from '../models/businessSegment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessSegmentService {

  httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetAllBusinessSegments(): Observable<HttpResponse<BusinessSegment[]>> {
    return this.httpClient.get<BusinessSegment[]>(environment.apiAddress + '/BusinessSegment/GetAllBusinessSegments', { headers: this.httpHeaders, observe: 'response' })
  }

  AddBusinessSegment(segment: BusinessSegment): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/BusinessSegment/AddBusinessSegment', JSON.stringify(segment), { headers: this.httpHeaders, observe: 'response' })
  }

  UpdateBusinessSegment(segment: BusinessSegment): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/BusinessSegment/UpdateBusinessSegment', JSON.stringify(segment), { headers: this.httpHeaders, observe: 'response' })
  }

  DeleteBusinessSegment(businessId: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(environment.apiAddress + '/BusinessSegment/DeleteBusinessSegment?businessId=' + businessId, { headers: this.httpHeaders, observe: 'response' });
  }

  GetBusinessSegment(businessId: number): Observable<HttpResponse<BusinessSegment>> {
    return this.httpClient.get<BusinessSegment>(environment.apiAddress + '/BusinessSegment/GetBusinessSegment?businessId=' + businessId, { headers: this.httpHeaders, observe: 'response' });
  }
}
