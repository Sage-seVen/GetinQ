import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private routy:Router) { }

  ngOnInit() {
    let key = localStorage.getItem('adminState');
    if(key=="true")
    this.routy.navigateByUrl('/adminhome')
  }

  username:string;
  password:string;
  
  validate(){
    if(this.username=="admin" && this.password=="admin")
      {
        console.log("Welcome Admin");
        localStorage.setItem('adminState', "true");
        this.routy.navigateByUrl("/adminhome");
      }
    else
      alert("Wrong Admin Details");
  }
}
