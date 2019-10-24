import { Component, OnInit } from '@angular/core';
import { BankingserviceService } from '../bankingservice.service';
import { Banking } from '../banking.model';
import { HospitalserviceService } from '../hospitalservice.service';
import { Hospital } from '../hospital.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private bankingserv:BankingserviceService, private hospitalservice:HospitalserviceService) { }

  ngOnInit() {
  }

  vision:boolean=false;
  vision1:boolean=false;
  avision:boolean=true;
  rvision:boolean=true;
  bankers:Banking[]=[];
  patients:Hospital[]=[];
  luserNumber:number[]=[];
  luserNumber1:number[]=[];
  i:number=0;
  j:number=0;

  parseDate(getdate:number)
  {
   return new Date(getdate).toDateString();
  }

  getallbank()
  {
      this.vision=true;
      this.bankingserv.getAllBankers().subscribe(
      data=> this.bankers=data,
      error=>console.log(error)
    );

    for(let rest of this.bankers)
    {
      //console.log(rest.userNumber);
      this.luserNumber[this.i]=rest.userNumber;
      console.log(this.luserNumber[this.i]);
      this.i++;
    }
  }

  getallhospital()
  {
      this.vision1=true;
      this.hospitalservice.getAllPatients().subscribe(
      data=> this.patients=data,
      error=>console.log(error)
    );

    for(let rest of this.patients)
    {
      //console.log(rest.userNumber);
      this.luserNumber1[this.j]=rest.userNumber;
      console.log(this.luserNumber1[this.j]);
      this.j++;
    }
  }

  // accepthider(test:any){
  //   if(test=="Approved")
  //       return false;
  //     }
  // }

  //   rejecthider (test:any){
  //     if(test=="Approved")
  //         return false;
  //       }
  //   }

    acceptpatient(test:any)
    {
      console.log(test);
      this.hospitalservice.validatePatient(test).subscribe( data=> console.log(data), error=>console.log(error) );
      this.avision=false;
      this.getallhospital();
      this.getallhospital();
    }
    rejectpatient(test:any){
      console.log(test);
      this.hospitalservice.rejectPatient(test).subscribe( data=> console.log(data), error=>console.log(error) );
      this.rvision=false;
      this.getallhospital();
      this.getallhospital();
      this.getallhospital();
    }

    acceptbanker(test:any)
    {
      console.log(test);
      this.bankingserv.validateBanker(test).subscribe( data=> console.log(data), error=>console.log(error) );
      this.getallbank();
      // this.getallbank();
    }

    rejectbanker(test:any){
      console.log(test);
      this.bankingserv.rejectBanker(test).subscribe( data=> console.log(data), error=>console.log(error) );
      this.getallbank();
      // this.getallbank();
      // this.getallbank();
    }
}