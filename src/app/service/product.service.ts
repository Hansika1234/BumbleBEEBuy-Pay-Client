import { Injectable } from '@angular/core';
import { config } from '../config';
import { HttpClient } from '@angular/common/http';
import { product } from '../product/product.module';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getEmployeeInfo(cusId: any) {
    throw new Error('Method not implemented.');
  }
  static LoadPeoductTable() {
    throw new Error('Method not implemented.');
  }

  baseApiUrl: string = config.url;
  _refreshNeeded$: any;

  constructor(private http: HttpClient) { }

  LoadPeoductTable() {
    return this.http.get<product[]>(this.baseApiUrl + 'api/Product/get');
  }

  deleteProduct(productId: number) {
    return this.http.delete(this.baseApiUrl +'api/Product/delete/' +productId);
  }

  // saveProduct(customer: any) {
  //   return this.http.post<product[]>(this.baseApiUrl +'api/Product/create',customer);
  // }


  saveProduct(adminlog: any){
    return this.http.post(`${config.url}api/Product/create`,adminlog);
  }


  getProductInfo(id: number) {
    return this.http.get<any>(`${config.url}api/Product/getbyID/${id}`);
  }

  updateCustomer(customer: product) {
    return this.http.post<product[]>(this.baseApiUrl + 'api/Product/update', customer);
  }

}
