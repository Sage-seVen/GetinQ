import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }

  email;
  password;

  pop(){
    alert("Login Successfull !");
  }
  check()
  {
    //if(this.Email=="admin"&&this.password=="admin")
  }

  constructor(private userservice:UserserviceService){}
  user:User={"userNumber":1234567890,"userName":"Dwarka",userEmail:"string",password:"string"};
  
  saveUser(){
    this.userservice.saveUser(this.user).subscribe( data=> console.log(data), error=>console.log(error) );
  }
}
