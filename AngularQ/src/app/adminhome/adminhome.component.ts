import { Component, OnInit } from '@angular/core';
import { BankingserviceService } from '../bankingservice.service';
import { Banking } from '../banking.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private bankingserv:BankingserviceService) { }

  ngOnInit() {
  }

  vision:boolean=false;
  bankers:Banking[]=[];
  getall()
  {
      this.vision=true;
      this.bankingserv.getAllBankers().subscribe(
      data=> this.bankers=data,
      error=>console.log(error)
    );

    for(let rest of this.bankers)
    {
      console.log(rest.status);
    }
  }
}
