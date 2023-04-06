import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CusRegisterComponent } from './cus-register/cus-register.component';
import { CusDetailsComponent } from './cus-details/cus-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CusloginComponent } from './cuslogin/cuslogin.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PaymentPlanComponent } from './payment-plan/payment-plan.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CusHomeComponent } from './cus-home/cus-home.component';
import { ViewaddmincusdetailComponent } from './viewaddmincusdetail/viewaddmincusdetail.component';
import { ViewallCusComponent } from './viewall-cus/viewall-cus.component';
import { ViewallProductComponent } from './viewall-product/viewall-product.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CusRegisterComponent,
    CusDetailsComponent,
    CusloginComponent,
    AddproductComponent,
    ProductdetailComponent,
    TestComponent,
    HomeComponent,
    PaymentPlanComponent,
    EditUserComponent,
    DashboardComponent,
    CusHomeComponent,
    ViewaddmincusdetailComponent,
    ViewallCusComponent,
    ViewallProductComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
