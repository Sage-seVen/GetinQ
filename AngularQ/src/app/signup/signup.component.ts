import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UserserviceService, private routy:Router) { }

  ngOnInit() {
  }
  
  user:User={"userNumber":null,"userName":"","userEmail":"","password":"","securityQuestion":"","answer":""};
  user1:User={"userNumber":null,"userName":"","userEmail":"","password":"","securityQuestion":"","answer":""};

  saveUser(){
    this.userservice.getUserbyid(this.user.userNumber).subscribe(
      data=>  { this.user1=data;
    if(this.user1 ==  null)
    {
      this.userservice.saveUser(this.user).subscribe( data=> console.log(data), error=>console.log(error) );
      alert("Account Creation Success")
      this.routy.navigateByUrl('/login');
    }
    else 
    {alert("Account Already Exists")}
    // this.userservice.setid(this.user.userNumber);
    // this.userservice.setname(this.user.userName);
    // this.userservice.setemail(this.user.userEmail);
    // this.userservice.setpass(this.user.password);
  },
  error=>console.log(error)
  )
}

}
