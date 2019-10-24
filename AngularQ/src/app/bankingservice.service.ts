import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banking } from './banking.model';

@Injectable({
  providedIn: 'root'
})
export class BankingserviceService {

  constructor(private http:HttpClient) { }

  saveToken(banking:Banking){
    return this.http.post<any>('http://localhost:8080/banking',banking);
  }

  getAllBankers()
  {
    return this.http.get<Banking[]>('http://localhost:8080/banking');
  }

  validateBanker(userNumber:number)
  {
    return this.http.put(`http://localhost:8080/banking/${userNumber}`,null);
  }

  rejectBanker(userNumber:number)
  {
    return this.http.put(`http://localhost:8080/banking1/${userNumber}`,null);
  }
}
