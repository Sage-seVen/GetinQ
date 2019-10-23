import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Banking } from '../banking.model';
import { BankingserviceService } from '../bankingservice.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  num:number;
  constructor(private userservice:UserserviceService, private bankingservice:BankingserviceService) {
    
    this.num=userservice.getid()
   }

  ngOnInit() {
  }

  //userNumber getting from userservice
  ldate:Date;
  lrequestType:String;
  lstatus:string="Requested";

  banking:Banking={userNumber:0, date:this.ldate, requestType:this.lrequestType,status:this.lstatus};
  
  savebdata(){
    this.banking.userNumber=this.num;
    
    this.bankingservice.saveToken(this.banking).subscribe( data=> console.log(data), error=>console.log(error) );
  }

}
