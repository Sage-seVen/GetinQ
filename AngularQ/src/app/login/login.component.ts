import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private userservice:UserserviceService, private routy:Router){}
  pop(){
    alert("Login Successfull !");
  }

  number;
  password;
  user: User={"userNumber":0,"userName":"","userEmail":"","password":""};
  
  dbuser:User;//experimenting




  getuser()
  {
    this.userservice.getUser(this.number,this.password).subscribe(
      data=> this.user=data,
      error=>console.log(error)
    );

    if(this.user.userNumber==this.number && this.user.password==this.password )
      {
      console.log("login success");
      this.userservice.setid(this.number);
      this.userservice.setname(this.user.userName);
      this.userservice.setemail(this.user.userEmail);
      this.userservice.setpass(this.user.password);
      this.routy.navigateByUrl("/userhome");
      }
    else
      console.log("invalid credentials");

   console.log(this.user.userName);
  }
}
