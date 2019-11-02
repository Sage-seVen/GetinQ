import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

loantoken:number;
depositoken:number;

setloantoken(num:number)
{
  this.loantoken=num;
  console.log(this.loantoken);
}

setdeposittoken(num:number)
{
  this.depositoken=num;
  console.log(this.depositoken);
}

getloantoken()
{
  console.log(this.loantoken);
  return this.loantoken;
}

getdepositoken()
{
  console.log(this.depositoken);
  return this.depositoken;
}

/*  globalnum:number;
  globalname:string;
  globalemail:string;
  globalpass:string;

  setid(num:number)
  {
    this.globalnum=num;
  }

  setname(name:string)
  {
    this.globalname=name;
  }
  setemail(email:string)
  {
    this.globalemail=email;
  }

  setpass(pass:string)
  {
    this.globalpass=pass;
  }

  getid()
  {
    return this.globalnum;
  }

  getname()
  {
    return this.globalname;
  }
  getemail()
  {
    return this.globalemail;
  }
  getpass()
  {
    return this.globalpass;
  }
  */
  

  /////////////
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

  getUserbyid(userNumber:number)
  {
    return this.http.get<User>(`http://localhost:8080/user/${userNumber}`);
  }

  updateUser(user:User)
  {
    return this.http.put<User>('http://localhost:8080/user',user);
  }

  deleteUSer(userNumber:number)
  {
    return this.http.delete<String>(`http://localhost:8080/user/${userNumber}`);
  }

  passwordreset(userNumber:number,password:string):Observable<User>
  {
    return this.http.put<any>(`http://localhost:8080/user/${userNumber}/${password}`,null);
  }


}
