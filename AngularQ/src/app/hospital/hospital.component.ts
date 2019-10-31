import { Component, OnInit, Input } from '@angular/core';
import { HospitalserviceService } from '../hospitalservice.service';
import { UserserviceService } from '../userservice.service';
import { Hospital } from '../hospital.model';
import { Router } from '@angular/router';
import {HttpClient,HttpEventType,HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  //num:number;
  @Input() intId:number;
  constructor(private userservice:UserserviceService, private hospitalservice:HospitalserviceService,private routy:Router, private http: HttpClient ) { 
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



/*

  percentDone: number;
  uploadSuccess: boolean;
  data: Object;
  f1:string;
  features:string[];
  userId: string;

  Files:File[];
  uploadAndProgress(files: File[]){

    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))

    this.http.post('http://localhost:8080/api/files', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {

        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);

        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;

        }

    });
  }

upload(files: File[]){
  this.f1=files[0].name;
  this.hospital.path="assets/Images/"+this.f1;
  this.uploadAndProgress(files);
}

upload1(files:File[]){

  this.Files=files;
}

  saveItem() {
   this.upload(this.Files);
    this.hospitalservice.save.subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }*/


}
