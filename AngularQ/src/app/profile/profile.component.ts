import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userservice:UserserviceService) { }

  ngOnInit() {
  }

  user: User={"userNumber":this.userservice.getid(),"userName":this.userservice.getname(),"userEmail":this.userservice.getemail(),"password":this.userservice.getpass()};

}
