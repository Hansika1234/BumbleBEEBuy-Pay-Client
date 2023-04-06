import { Component, OnInit } from '@angular/core';
import { bumblebee } from '../bumble-bee/bumble-bee.module';
import { BumbleServiceService } from '../service/bumble-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cus-details',
  templateUrl: './cus-details.component.html',
  styleUrls: ['./cus-details.component.css']
})
export class CusDetailsComponent implements OnInit {

  newdata: bumblebee[] = []; // get model
  
  contactservice: any;
  toastr: any;
  error: any;
  loading!: boolean;
  EmployeeInfo: any = null;
  LoadTable: any;

  mydate = Date.now();

  addCustomer: bumblebee ={
    cusId:0 ,
    cusFirstName :'',
    cusLastName:'',
    cusDateofBirth:new Date(this.mydate) ,
    cusEmail:'',
    cusGender:'',
    cusNic:'',
    cusMobileNo:'',
    cusPassword:'',
    cusRegistrationDate:new Date(this.mydate),
    cusIsActive:false
  
    }

  constructor(private _bumbleservice: BumbleServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this._bumbleservice.LoadTable()
      .subscribe({
        next: (newdata) => {
          this.newdata = newdata;
        },

        error: (response) => {

          console.log(response)
        }
      })
  }

  delete(object: any) {
    this._bumbleservice.deleteCustomer(object.cusId).subscribe((_result: any) => {
      this.toastr.success('Product Deleted Successfully');
      this.LoadTable()
      // this.load();
    },
      (error: any) => {
        this.error = error;
        this.loading = false;
      });
  }

  edit(object: any){
    this.contactservice.getEmployeeInfo(object.cusId).subscribe((result: any) => {
    this.EmployeeInfo = Object.assign([], result);
    this.LoadTable()
   }) 
   }

   //save customer details
   onsubmit(cusDetails: any){ // cusDetails is object
    this.router.navigate(['/cusRegister', {'customer': JSON.stringify(cusDetails)}]); //compress as to String object
    // console.log('msg',this.addCustomer);
    // this._bumbleservice.updateCustomer(this.addCustomer).subscribe({
    //   next:(bumblebee) => {
    //     

    //   }
    // })
  }
   
}
