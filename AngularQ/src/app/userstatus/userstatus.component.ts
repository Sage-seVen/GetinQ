import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { BankingserviceService } from '../bankingservice.service';
import { Banking } from '../banking.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userstatus',
  templateUrl: './userstatus.component.html',
  styleUrls: ['./userstatus.component.css']
})
export class UserstatusComponent implements OnInit {
// num:number;
// date:Date;
// requestType:string;
// status:string;
// loanToken:number;
// depositToken:number;
vision:boolean=false;

  constructor(private userservice:UserserviceService, private bankingservice:BankingserviceService, private routy:Router) {
    // this.num=parseInt(localStorage.getItem('id'));
    // console.log(this.num)
   }

   banking:Banking={userNumber:null, date:null, requestType:"" , status:"", loanToken:null, depositToken:null};

  ngOnInit() {
    let key = localStorage.getItem('sessionState');
    if(key!="LoggedIn") 
    this.routy.navigateByUrl('/login');
  }

  parseDate(getdate:number)
  {
   return new Date(getdate).toDateString();
  }

  bookingstatus()
   {
     this.vision=true;
      this.bankingservice.getBankerById(parseInt(localStorage.getItem('id'))).subscribe( 
      data=>{ this.banking=data;
        console.log(data)
        console.log(this.banking.userNumber);
        console.log(this.banking.loanToken);
        console.log(this.banking.depositToken);
      },
       error=>console.log(error) );
      // this.bankingservice.setdeposit(this.depositToken);
      // this.bankingservice.setloan(this.loanToken);

    
   }

}