import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }

  ngOnInit() {
  }
  user: User={"userNumber":parseInt(localStorage.getItem('id')),
  "userName":localStorage.getItem('userName'),
  "userEmail":localStorage.getItem('userEmail'),
  "password":localStorage.getItem('pass')};
  // "securityQuestion":this.userservice.getsecurity(),
  // "answer":this.userservice.getanswer()};

updatedetails()
{
  this.userservice.updateUser(this.user).subscribe( data=> console.log(data), error=>console.log(error) );
  // this.userservice.setid(this.user.userNumber)
  // this.userservice.setname(this.user.userName)
  // this.userservice.setemail(this.user.userEmail)
  // this.userservice.setpass(this.user.password)
  alert("profile updated Successfully");
}
}
