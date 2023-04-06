import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CusDetailsComponent } from './cus-details/cus-details.component';
import { CusRegisterComponent } from './cus-register/cus-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CusloginComponent } from './cuslogin/cuslogin.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CusHomeComponent } from './cus-home/cus-home.component';
import { ViewallCusComponent } from './viewall-cus/viewall-cus.component';
import { ViewaddmincusdetailComponent } from './viewaddmincusdetail/viewaddmincusdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

   { path: 'login', component: AdminLoginComponent }, // first page 
  // {
  //   path:'',
  //   component:AppComponent,
  //  },
   {
     path: 'cusDetails',
     component:CusDetailsComponent,
   },
   {
     path: 'cusRegister',
     component:CusRegisterComponent
   },
   
  {
    path: 'editcustomer',
    component:EditUserComponent,
  },
  
   {
    path: 'test',
    component:TestComponent,
  },
  {
    path: 'home',
    component:HomeComponent,
  },
  {
    path: 'productdetail',
    component:ProductdetailComponent,
  },
  {
    path: 'addproduct',
    component:AddproductComponent,
  },
  {
    path: 'cuslogin',
    component:CusloginComponent,
  },
  {
    path: 'Paymnet',
    component:PaymentPlanComponent,
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
  },
  {
    path: 'cusHome',
    component:CusHomeComponent,
  },
  {
    path: 'viewCusDetail',
    component:ViewaddmincusdetailComponent,
  },
  {
    path: 'viewallCus',
    component:ViewallCusComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
