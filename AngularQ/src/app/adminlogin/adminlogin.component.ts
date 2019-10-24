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
  }

  username:string;
  password:string;
  
  validate(){
    if(this.username=="admin" && this.password=="admin")
      {
        console.log("Welcome Admin");
        this.routy.navigateByUrl("/adminhome");
      }
    else
      console.log("Invalid credentials");
  }
}
