import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { BankingserviceService } from '../bankingservice.service';
import { Banking } from '../banking.model';
import { Router } from '@angular/router';
import { HospitalserviceService } from '../hospitalservice.service';
import { Hospital } from '../hospital.model';

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
vision1:boolean=false;
cd:number;
cl:number;

  constructor(private userservice:UserserviceService, private bankingservice:BankingserviceService, private routy:Router,private hospitalservice:HospitalserviceService) {
    // this.num=parseInt(localStorage.getItem('id'));
    // console.log(this.num)
   }

   banking:Banking={userNumber:null, date:null, requestType:"" , status:"", loanToken:null, depositToken:null};
   hospital:Hospital={userNumber:0, date:null, slot:0, requestType:"",message:"", status:""};
  
   tokeno:number;
   label:string;
   sloter:string;  

  ngOnInit() {
    let key = localStorage.getItem('sessionState');
    if(key!="LoggedIn") 
    this.routy.navigateByUrl('/login');
    
    this.cd=this.userservice.getdepositoken();
    this.cl=this.userservice.getloantoken();
    console.log(this.cd);
    console.log(this.cl);
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
        if(this.banking.requestType=="Loan")
          this.tokeno=this.banking.loanToken;
        else
          this.tokeno=this.banking.depositToken;
        console.log(data)
        console.log(this.banking.userNumber);
        console.log(this.banking.loanToken);
        console.log(this.banking.depositToken);
        console.log(this.cd);
    console.log(this.cl);
      },
       error=>console.log(error) );
      // this.bankingservice.setdeposit(this.depositToken);
      // this.bankingservice.setloan(this.loanToken);    
   }

   bookingstatus1(){
    this.vision1=true;
    this.hospitalservice.getPatientbyid(parseInt(localStorage.getItem('id'))).subscribe(
      data=>{this.hospital=data;
        console.log(data)
        if(this.hospital.slot==1)
        this.sloter="SLOT-1 => 10AM-12PM";
        else
        this.sloter=" SLOT-2 =>   2PM-4PM";
        // console.log(this.sloter);
        // console.log(this.hospital.slot);
      },
      error=>console.log(error)
    );
   }

}