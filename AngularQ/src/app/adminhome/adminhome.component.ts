import { Component, OnInit } from '@angular/core';
import { BankingserviceService } from '../bankingservice.service';
import { Banking } from '../banking.model';
import { HospitalserviceService } from '../hospitalservice.service';
import { Hospital } from '../hospital.model';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private userservice:UserserviceService, private bankingserv:BankingserviceService, private hospitalservice:HospitalserviceService, private routy:Router) { }

  ngOnInit() {
    let key = localStorage.getItem('adminState');
    if(key!="true")
    this.routy.navigateByUrl('/adminlogin')
  }

  vision:boolean=false;
  vision1:boolean=false;

  avision:boolean=true;
  rvision:boolean=true;

  bankers:Banking[]=[];
  patients:Hospital[]=[];
  able:string="btn btn-primary active";
  disable:string="btn btn-primary disabled";
  btnlabel:string;
  luserNumber:number[]=[];
  luserNumber1:number[]=[];
  i:number=0;
  j:number=0;
  tokeno:number;

  cd:number;
  cl:number;

  parseDate(getdate:number)
  {
   return new Date(getdate).toDateString();
  }


  getallbank()
  {
      this.vision=true;
      this.bankingserv.getAllBankers().subscribe(
      data=>{ this.bankers=data;
      
      error=>console.log(error)}
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
      this.hospitalservice.validatePatient(test).subscribe( data=> this.patients=data, error=>console.log(error) );
      this.avision=false;
      this.btnlabel=this.disable;
    }
    rejectpatient(test:any){
      console.log(test);
      this.hospitalservice.rejectPatient(test).subscribe( data=> this.patients=data, error=>console.log(error) );
      this.rvision=false;
    }

    acceptbanker(test:any)
    {
      console.log(test);
      this.bankingserv.validateBanker(test).subscribe( data=> this.bankers=data, error=>console.log(error) );
    }

    rejectbanker(test:any){
      console.log(test);
      this.bankingserv.rejectBanker(test).subscribe( data=> this.bankers=data, error=>console.log(error) );
    }

    sendupdate(){
      this.userservice.setloantoken(this.cl);
      this.userservice.setdeposittoken(this.cd);
      console.log(this.userservice.getloantoken+"");
      console.log(this.userservice.getdepositoken);
    //   console.log(this.cd);
    // console.log(this.cl);
    }

    adminlogout(){
      localStorage.removeItem('adminState');
      alert("Bye Bye Admin");
      this.routy.navigateByUrl('/adminlogin');
    }
}