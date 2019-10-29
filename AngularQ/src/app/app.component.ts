import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularQ';

  constructor(private userservice:UserserviceService){}
  // user:User={"userNumber":123456789,"userName":"Dwarka",userEmail:"string",password:"string"};
  
  // saveUser(){
  //   this.userservice.saveUser(this.user).subscribe( data=> console.log(data), error=>console.log(error) );
  // }
}
