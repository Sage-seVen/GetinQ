import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }

  ngOnInit() {
  }
  
  user:User={"userNumber":0,"userName":"","userEmail":"","password":""};
  
  saveUser(){
    this.userservice.saveUser(this.user).subscribe( data=> console.log(data), error=>console.log(error) );
    this.userservice.setid(this.user.userNumber);
    this.userservice.setname(this.user.userName);
    this.userservice.setemail(this.user.userEmail);
    this.userservice.setpass(this.user.password);

  }

}
