import { Component, OnInit } from '@angular/core';
import { payment } from '../payment/payment.module';
import { InstallemntServiceService } from '../installemnt-service.service';
import { PaymnetServiceService } from '../service/paymnet-service.service';

@Component({
  selector: 'app-payment-plan',
  templateUrl: './payment-plan.component.html',
  styleUrls: ['./payment-plan.component.css']
})
export class PaymentPlanComponent implements OnInit {

  newdata: payment[] = []; 

  addpayment: payment ={

    cusFirstName: '',
    productName :'',
    loanBalance:0,
    installmentPlan:0,
    usedAmount:0,
  
    }

  constructor(private _paymentservice: PaymnetServiceService) { }

  ngOnInit(): void {

    this._paymentservice.LoadTable()
    .subscribe({
      next: (newdata) => {
        this.newdata = newdata;
      },

      error: (response) => {

        console.log(response)
      }
    })

  }

}
