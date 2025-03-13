import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  Encrypt(data: any): any {
    let json = JSON.stringify(data);
    return CryptoJS.AES.encrypt(json, environment.encKey);
  }
  Decrypt(encData: any): any {
    var bytes = CryptoJS.AES.decrypt(encData.toString(), environment.encKey);
    var data = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(data);
  }
}
