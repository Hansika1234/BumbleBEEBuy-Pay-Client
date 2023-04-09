import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from './config';
import { HttpClient } from '@angular/common/http';
import { payment } from './payment/payment.module';

@Injectable({
  providedIn: 'root'
})
export class InstallemntServiceService {

  // baseApiUrl: string=config.url;

  // constructor(
  //   private http: HttpClient ) { }


  //   LoadTable(){
  //     // return this.http.get<any>(`${config.url}/api/Customer/get`);
  //      return this.http.get<payment[]>(this.baseApiUrl + 'api/AdminLogin/get');
  //   }


}
