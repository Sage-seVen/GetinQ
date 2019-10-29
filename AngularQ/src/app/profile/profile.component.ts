import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() intId:number;

  // intId1:number;
  constructor(private userservice:UserserviceService, private routy:Router) { 

  }
  ngOnInit() {
  let key = localStorage.getItem('sessionState');
  // this.intId= parseInt(localStorage.getItem('id'));
  if(key!="LoggedIn") 
    this.routy.navigateByUrl('/login');
  // console.log(this.intId);
  console.log(this.user.userNumber)
  // console.log(Object.values(this.user.userNumber))
  }

  user: User={userNumber:parseInt(localStorage.getItem('id')),
  "userName":localStorage.getItem('userName'),
  "userEmail":localStorage.getItem('userEmail'),
  "password":localStorage.getItem('pass'),
  "securityQuestion":"","answer":""};

}
