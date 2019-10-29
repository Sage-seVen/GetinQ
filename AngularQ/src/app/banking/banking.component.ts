import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Banking } from '../banking.model';
import { BankingserviceService } from '../bankingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})

export class BankingComponent implements OnInit {
  @Input() intId:number;
  //num:number;
  constructor(private userservice:UserserviceService, private bankingservice:BankingserviceService, private routy:Router) {
    //this.num=userservice.getid()
   }

  ngOnInit() {
    let key = localStorage.getItem('sessionState');
    let userNum = localStorage.getItem('id');
    this.intId= parseInt(userNum);
    if(key!="LoggedIn") 
    this.routy.navigateByUrl('/login');
  }

  //userNumber getting from userservice
  // ldate:Date;
  // lrequestType:String;
  lstatus:string="Requested";

  banking:Banking={userNumber:0, date:null, requestType:"",status:this.lstatus, loanToken:null, depositToken:null};
  
  savebdata(){
    this.banking.userNumber=this.intId;
    this.bankingservice.saveToken(this.banking).subscribe( data=> console.log(data), error=>console.log(error) );
  }

}
