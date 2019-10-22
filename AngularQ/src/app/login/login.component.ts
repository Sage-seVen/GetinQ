import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
}
