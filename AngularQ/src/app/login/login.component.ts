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
    let key = localStorage.getItem('sessionState');
    let userName = localStorage.getItem('id');
    if(key=="LoggedIn") this.routy.navigateByUrl('/userhome');
  }

  constructor(private userservice:UserserviceService, private routy:Router){}

  number:number;
  password:any;

  user: User={"userNumber":null,"userName":"","userEmail":"","password":"","securityQuestion":"","answer":""};
  getuser()
  {
    this.userservice.getUser(this.number,this.password).subscribe(
    data=>  { this.user=data;
              if(this.user!=null)
              //if(this.user.userNumber==this.number && this.user.password==this.password ) as single user is getting from db
              {
              console.log("Login success");
              localStorage.setItem('id', this.user.userNumber+"");
              localStorage.setItem('userName', this.user.userName);
              localStorage.setItem('userEmail',this.user.userEmail);
              // localStorage.setItem('pass',this.user.password);
              localStorage.setItem('sessionState', "LoggedIn");
              localStorage.setItem('securityQuestion', this.user.securityQuestion);
              localStorage.setItem('answer',this.user.answer);
              // this.userservice.setid(this.number);
              // this.userservice.setname(this.user.userName);
              // this.userservice.setemail(this.user.userEmail);
              // this.userservice.setpass(this.user.password);
              this.routy.navigateByUrl("/userhome");
              }
              else
                alert("Invalid Credentials");
            },
      error=>console.log(error)
    );

    
   console.log(this.user.userName + "has been logged in");
  }
}
