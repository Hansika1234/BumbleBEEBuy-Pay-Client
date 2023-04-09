import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../service/adminservice.service';
import { admin } from '../service/admin/admin.module';
import { AbstractControl,FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  username!: string;
  userpassword!: string;
  submitted = false;

  myForm = new FormGroup ({
    userName : new FormControl('',Validators.required),
    userpassword : new FormControl('',Validators.required),
   
  })

  toastr: any;
  error: any;
  formBuilder: any;
 
 
  constructor(
      private route: ActivatedRoute,
      private adminService : AdminserviceService,
      private router: Router,
      private fb :FormBuilder) { }



        ngOnInit() {

          //  this.myForm = this.fb.group({
          //   userpassword: ['', Validators.required]
          // });
          
          
        }
        
  // //redirect to home page & save
  // Submit() {
  //  // console.log('msg',this.addCustomer);
  // //  this.adminService.AdminLOgin(this.addAdmin).subscribe({
  // //   next:(bumblebee) => {

      
  //     this.router.navigate(['/home']);

  //   }


  submit(){
    this.submitted = true;
    console.log('value1',this.username);
    console.log('value2',this.userpassword);
    // this.loading = true;
    if (this.myForm.valid) {
      this.adminService.Logadmin(this.myForm.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['/home']);
       // this.toastr.success('admin login Sucessfully ');
       alert('Loging Successfull ....!');
      });
      //alert('Usernname or password is incorrect....!');
    }
   //alert('Usernname or password is incorrect....!');
}

}

  // Submit(): void {
  //   this.adminService.login(this.username, this.userpassword).subscribe(
  //     response => {
  //       // Handle successful login
  //       console.log("aaaa",this.username)
  //       console.log('Login success', response);
  //       this.router.navigate(['/home']);
  //       // Store user session information, such as JWT token, in local storage
  //       localStorage.setItem('token', response.token);
  //     },
  //     error => {
  //       // Handle login error
  //       console.error('Login error', error);
  //     }
  //   );
 
  //  }
  // }

  // //  onsubmit(){
  // //   this.router.navigate(['/home']); 
  // //   console.log('msg',this.addCustomer);
  // //   this.bbservice.saveCustomer(this.addCustomer).subscribe({
  // //     next:(bumblebee) => {
  // //       this.router.navigate(['cusDetails']);

  // //     }
  // //   })
  // // }



 

