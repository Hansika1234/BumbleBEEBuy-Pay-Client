import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { bumblebee } from '../bumble-bee/bumble-bee.module';
import { BumbleServiceService } from '../service/bumble-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

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

   constructor(
   // private formBuilder: FormBuilder,
    private bbservice: BumbleServiceService,
    private router: Router,
    private route: ActivatedRoute) { 

    }

  ngOnInit(){

    //getting ID value from grid
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('test',this.id)
    this.addCustomer.cusFirstName = 'ghggh'
    this.bbservice.getCustomerInfo(Number(this.id)).subscribe(data=>{
      console.log('test',data)
      
    })
  
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
