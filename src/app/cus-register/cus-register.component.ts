import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BumbleServiceService } from '../service/bumble-service.service';
import { bumblebee } from '../bumble-bee/bumble-bee.module';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-cus-register',
  templateUrl: './cus-register.component.html',
  styleUrls: ['./cus-register.component.css']
})
export class CusRegisterComponent implements OnInit {

  datePipe: DatePipe = new DatePipe('en-US');
 
  registerForm!:FormGroup
  submitted=false;
  contactservice: any;
  toastr: any;
  error: any;
  loading!: boolean;
  currentDate!: Date;

 myDate: Date = new Date();
 myString: string = this.myDate.toString();

 //getFormattedDate() {
  date = new Date();
   transformDate = this.datePipe.transform(this.date, 'yyyy-MM-dd');
  //return transformDate;
//}

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
  id: string | null | undefined;
  cusDetails: any;

   constructor(
   // private formBuilder: FormBuilder,
    private bbservice: BumbleServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb:FormBuilder) { 

    }

  ngOnInit(){

    

    //getting ID value from grid
    // this.id = this.route.snapshot.paramMap.get('id') 
    // console.log('test',this.id);
    
    this.bbservice.getCustomerInfo(Number(this.id)).subscribe()
    console.log('sSDD',this.id)
    //   data=>{
    //  // this.addCustomer.cusFirstName =data.
    //   console.log('test1',data)
      
    // });

    this.cusDetails =  this.route.snapshot.paramMap.get('customer'); //customer is parameter
    let customer = JSON.parse(this.cusDetails); //deserialize 
     console.log(customer);

     if(this.cusDetails != null) {
      this.addCustomer = customer;
     }
    //validation
    // this.registerForm=this.formBuilder.group({
    //   firstName:['',[Validators.required,Validators]],
     
    // })
  }

  onsubmit(){

    console.log('msg',this.addCustomer);
    this.bbservice.saveCustomer(this.addCustomer).subscribe({
      next:(bumblebee) => {
        this.router.navigate(['cusDetails']);

      }
    })
  }


}
