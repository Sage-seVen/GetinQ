import { Component, OnInit, Input } from '@angular/core';
import { HospitalserviceService } from '../hospitalservice.service';
import { UserserviceService } from '../userservice.service';
import { Hospital } from '../hospital.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  //num:number;
  @Input() intId:number;
  constructor(private userservice:UserserviceService, private hospitalservice:HospitalserviceService,private routy:Router) { 
    //this.num=userservice.getid()
  }

  ngOnInit() {
    let key = localStorage.getItem('sessionState');
    let userNum = localStorage.getItem('id');
    this.intId= parseInt(userNum);
    if(key!="LoggedIn") 
    this.routy.navigateByUrl('/login');
  }

  lstatus:string="Requested";
  hospital:Hospital={userNumber:0, date:null, slot:0, requestType:"",message:"", status:this.lstatus};
  
  savebdata(){
    this.hospital.userNumber=this.intId;
    this.hospitalservice.saveAppointment(this.hospital).subscribe( data=> console.log(data), error=>console.log(error) );
  }

}
