import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusType } from '../models/status-type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusTypeService {
  httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.httpHeaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  GetAllStatusTypes(): Observable<HttpResponse<StatusType[]>> {
    return this.httpClient.get<StatusType[]>(environment.apiAddress + '/Status/GetAllStatuses', { headers: this.httpHeaders, observe: 'response' })
  }

  AddStatusType(status: StatusType): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/Status/AddStatus', JSON.stringify(status), { headers: this.httpHeaders, observe: 'response' })
  }

  UpdateStatusType(status: StatusType): Observable<HttpResponse<HttpResponse<any>>> {
    return this.httpClient.post<HttpResponse<any>>(environment.apiAddress + '/Status/UpdateStatus', JSON.stringify(status), { headers: this.httpHeaders, observe: 'response' })
  }

  DeleteStatusType(statusId: number): Observable<HttpResponse<any>> {
    return this.httpClient.delete<HttpResponse<any>>(environment.apiAddress + '/Status/DeleteStatus?statusId=' + statusId, { headers: this.httpHeaders, observe: 'response' });
  }

  GetStatusType(statusId: number): Observable<HttpResponse<StatusType>> {
    return this.httpClient.get<StatusType>(environment.apiAddress + '/Status/GetStatus?statusId=' + statusId, { headers: this.httpHeaders, observe: 'response' });
  }

}
