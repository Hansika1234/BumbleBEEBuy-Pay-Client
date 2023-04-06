import { Component, OnInit } from '@angular/core';
import { bumblebee } from '../bumble-bee/bumble-bee.module';
import { BumbleServiceService } from '../service/bumble-service.service';
import { product } from '../product/product.module';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  
  newproductdata: product[] = []; // get model
  toastr: any;
  error: any;
  loading!: boolean 
  EmployeeInfo: any;
  
  constructor(
    private _productservice : ProductService,
    private router: Router) 
    { }

    //Load table
    ngOnInit(): void {

      this._productservice.LoadPeoductTable()
        .subscribe({
          next: (newproductdata) => {
            this.newproductdata = newproductdata;
          },
          error: (response: any) => { 
            console.log(response)
          }
        })
    }

    delete(object: any) {
      this._productservice.deleteProduct(object.cusId).subscribe((_result: any) => {
        this.toastr.success('Product Deleted Successfully');
        //this.LoadTable()
        // this.load();
      },
        (error: any) => {
          this.error = error;
          this.loading = false;
        });
    }
  
    edit(object: any){
      this._productservice.getProductInfo(object.cusId).subscribe((result: any) => {
      this.EmployeeInfo = Object.assign([], result);
    //  this.LoadTable()
     }) 
     }  

  

//save customer details
onsubmit(product: any){ // cusDetails is object
  this.router.navigate(['/addproduct',{'product': JSON.stringify(product)}]); //compress as to String object
}

}
