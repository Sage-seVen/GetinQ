import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  saveUser(user:User){
    return this.http.post<any>('http://localhost:8080/user',user);
  }


  getAllUsers()
  {
    return this.http.get<User[]>('http://localhost:8080/user');
  }

  getUser(userNumber:number)
  {
    return this.http.get<User>(`http://localhost:8080/user/${userNumber}`);
  }
}
