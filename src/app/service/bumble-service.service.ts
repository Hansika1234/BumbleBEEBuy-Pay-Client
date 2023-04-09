import { Injectable } from '@angular/core';
import { bumblebee } from '../bumble-bee/bumble-bee.module';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class BumbleServiceService {
  [x: string]: any;

  baseApiUrl: string=config.url;
  _refreshNeeded$: any;

  constructor(private http: HttpClient) { }

LoadTable(){
  // return this.http.get<any>(`${config.url}/api/Customer/get`);
   return this.http.get<bumblebee[]>(this.baseApiUrl + 'api/Customer/get');
}

deleteCustomer(Cus_ID: number){
  return this.http.delete(this.baseApiUrl + 'api/Customer/delete/'+Cus_ID); 
}

saveCustomer(customer: bumblebee){
 // return this.http.post<any>(`${config.url}/api/aCustomer/create`,customer);
  return this.http.post<bumblebee[]>(this.baseApiUrl + 'api/Customer/create',customer);
}

getEmployees(){
  return this.http.get<any>(`${config.url}/api/Product/get`);  
}

getCustomerInfo(id: number){
  return this.http.get<any>(`${config.url}api/Customer/getbyID/${id}`);  
}

// updateCustomer(id: number, name: string) {
//   const url = `${this.baseApiUrl}/update-user`;
//   const body = { id, name };
//   return this.http.post(url, body);
// }

updateCustomer(customer: bumblebee){
   return this.http.post<bumblebee[]>(this.baseApiUrl +'api/Customer/update',customer);
 }

 LogCustomer(cusnlog: any){
  return this.http.post(`${config.url}api/Customer/Login`,cusnlog);
}


}
