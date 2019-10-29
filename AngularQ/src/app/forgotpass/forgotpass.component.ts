import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  constructor(private userservice:UserserviceService, private routy:Router) { }
  num;
  security;
  answer;
  user:User={"userNumber":0,"userName":"","userEmail":"","password":"","securityQuestion":"","answer":""};
  
  forgot()
  {
    console.log(this.num);
    this.userservice.getUserbyid(this.num).subscribe(
      data=> {this.user=data;
        if(this.user.userNumber!=null && this.user.securityQuestion==this.security && this.user.answer==this.answer)
        {
        localStorage.setItem('id', this.user.userNumber+"");
        this.routy.navigateByUrl("/resetpass");
        }
        else
        console.log("Invalid Answer");},
      error=>console.log(error)
      );

      
  }
  ngOnInit() {
  }

}
