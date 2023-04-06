import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { admin } from './admin/admin.module';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  baseApiUrl: string=config.url;

  constructor(private http: HttpClient) {}

  AdminLOgin(adminlog: admin){
     return this.http.post<admin[]>(this.baseApiUrl + 'api/AdminLogin/Login',adminlog);
   }

  //  login(admin: admin){
  //   return this.http.post<admin[]>(this.baseApiUrl + 'api/AdminLogin/Login',admin);
  // }

  Logadmin(adminlog: any){
    return this.http.post(`${config.url}api/AdminLogin/Login`,adminlog);
  }
}
