import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../product/product.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProduct: product ={
    productId:0 ,
    category:'',
    productName:'',
    productBrand:'',
    unitPrice:0.00,
    cusId: 0,
    categoryId: 0
    }

  cusDetails: any;
  id: string | null | undefined;
  productId: any;
  product: any;
  submitted = false;
  productName!: string;
  productBrand!: string;


  myForm = new FormGroup ({
    productId : new FormControl('',Validators.required),
    productName : new FormControl('',Validators.required),
    productBrand : new FormControl('',Validators.required),
    unitPrice : new FormControl('',Validators.required),
    category : new FormControl('',Validators.required),
  })
  adminService: any;
  toastr: any;
  EmployeeInfo: any;

  constructor(
    private productService : ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(){
      this.productService.getProductInfo(Number(this.id)).subscribe(data=>{
        console.log('test1',data)
        
      });
  
      this.product =  this.route.snapshot.paramMap.get('product'); //customer is parameter
      let addProduct = JSON.parse(this.product); //deserialize 
       console.log(addProduct);
  
       if(this.product != null) {
        this.addProduct = addProduct;
       }
    }

//  onsubmit(){
//     console.log('msg',this.addProduct);
//     this.productService.saveProduct(this.addProduct).subscribe({
//       next:(product) => {
//         this.router.navigate(['cusDetails']);

//       }
//     })
//   }

submit(){
  this.submitted = true;
  //console.log('value1',this.productName);
  //console.log('value2',this.productBrand);
  // this.loading = true;
  if (this.myForm) {
    this.productService.saveProduct(this.myForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/home']);
      alert('Add product Successfull ....!')
      //this.toastr.success('Product Save Sucessfully ');
    });
  }
}
 
edit(object: any){
  this.productService.getProductInfo(object.cusId).subscribe((result: any) => {
  this.EmployeeInfo = Object.assign([], result);
//  this.LoadTable()
 }) 
 }  

 update(){
  this.submitted = true;
  //console.log('value1',this.productName);
  //console.log('value2',this.productBrand);
  // this.loading = true;
  if (this.myForm) {
    this.productService.updateProduct(this.myForm.value).subscribe(res => {
      console.log(res);
     // this.router.navigate(['/home']);
      alert('Add Update Successfull ....!');
      //this.toastr.success('Product Save Sucessfully ');
    });
  }
}


}
