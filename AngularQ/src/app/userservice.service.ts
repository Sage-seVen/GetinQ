import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  globalnum:number;

  setid(num:number)
  {
    this.globalnum=num;
  }

  getid()
  {
    return this.globalnum;
  }
  
  saveUser(user:User){
    return this.http.post<any>('http://localhost:8080/user',user);
  }


  getAllUsers()
  {
    return this.http.get<User[]>('http://localhost:8080/user');
  }

  getUser(userNumber:number,password:string):Observable<User>
  {
    return this.http.get<User>(`http://localhost:8080/user/${userNumber}/${password}`);
  }


}
