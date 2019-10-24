import { Component, OnInit } from '@angular/core';
import { HospitalserviceService } from '../hospitalservice.service';
import { UserserviceService } from '../userservice.service';
import { Hospital } from '../hospital.model';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  num:number;
  constructor(private userservice:UserserviceService, private hospitalservice:HospitalserviceService) { 
    this.num=userservice.getid()
  }

  ngOnInit() {
  }

  lstatus:string="Requested";

  hospital:Hospital={userNumber:0, date:null, slot:0, requestType:"",message:"", status:this.lstatus};
  
  savebdata(){
    this.hospital.userNumber=this.num;
    this.hospitalservice.saveAppointment(this.hospital).subscribe( data=> console.log(data), error=>console.log(error) );
  }

}
