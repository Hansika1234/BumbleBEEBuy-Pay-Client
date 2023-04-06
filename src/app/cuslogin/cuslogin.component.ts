import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BumbleServiceService } from '../service/bumble-service.service';

@Component({
  selector: 'app-cuslogin',
  templateUrl: './cuslogin.component.html',
  styleUrls: ['./cuslogin.component.css']
})
export class CusloginComponent implements OnInit {

  submitted = false;
  cusEmail!: string;
  cusPassword!: string;

  myForm = new FormGroup ({
    cusEmail : new FormControl('',Validators.required),
    cusPassword : new FormControl('',Validators.required),
   
  })
  formBuilder: any;

  constructor( private _bumbleservice: BumbleServiceService,
               private route: ActivatedRoute,
               private router: Router) { }
    
  ngOnInit(): void {

    //Add User form validations
    this.myForm = this.formBuilder.group({
      cusEmail: ['', [Validators.required, Validators.email]],
      cusPassword: ['', [Validators.required]]
      });
  }

   //redirect to Payment page
   submit() {
    this.submitted = true;
    console.log('value1',this.cusEmail);
    console.log('value2',this.cusPassword);
    // this.loading = true;
    if (this.myForm) {
      this._bumbleservice.LogCustomer(this.myForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/cusHome']);
      //  this.toastr.success('Customer login Sucessfully ');
      });
    }


   // this.router.navigate(['/Paymnet']); 
   }

   

}
