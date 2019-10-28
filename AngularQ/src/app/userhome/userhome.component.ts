import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  @Input() intId:number;
  @Input() userName:string;
  constructor(private routy:Router) { }

  ngOnInit() {
    let key = localStorage.getItem('sessionState');
    this.intId= parseInt(localStorage.getItem('id'));
    this.userName = localStorage.getItem('userName');
    if(key!="LoggedIn") 
      this.routy.navigateByUrl('/login');
    console.log("user:login => "+this.userName);
  }

  logout(){
    localStorage.clear();
    alert("Log Out Successfull");
    this.routy.navigateByUrl('/login');
  }

}
