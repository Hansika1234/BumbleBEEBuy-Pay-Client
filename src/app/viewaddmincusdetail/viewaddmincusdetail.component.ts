import { Component, OnInit } from '@angular/core';
import { BumbleServiceService } from '../service/bumble-service.service';
import { Router } from '@angular/router';
import { bumblebee } from '../bumble-bee/bumble-bee.module';

@Component({
  selector: 'app-viewaddmincusdetail',
  templateUrl: './viewaddmincusdetail.component.html',
  styleUrls: ['./viewaddmincusdetail.component.css']
})
export class ViewaddmincusdetailComponent implements OnInit {

  newdata: bumblebee[] = []; // get model
  

  constructor(
    private _bumbleservice: BumbleServiceService,
    private router: Router) { }

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


}
