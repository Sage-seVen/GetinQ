import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {

  
  password;
  constructor(private userservice:UserserviceService, private routy:Router) { }
  
  user:User={"userNumber":parseInt(localStorage.getItem('id')),"userName":"","userEmail":"","password":"","securityQuestion":"","answer":""};


  reset()
  {
    console.log(this.password);
    this.userservice.passwordreset(this.user.userNumber,this.password).subscribe(
      data=> this.user=data,
      error=>console.log(error)
      );
      // this.userservice.setid(this.user.userNumber);
      alert("Password Updated Successfully");
      this.routy.navigateByUrl("/login");
  }

  ngOnInit() {
  }

}