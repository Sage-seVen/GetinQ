import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from './hospital.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalserviceService {

  constructor(private http:HttpClient) { }


  saveAppointment(hospital:Hospital){
    return this.http.post<any>('http://localhost:8080/hospital',hospital);
  }

  getAllPatients()
  {
    return this.http.get<Hospital[]>('http://localhost:8080/hospital');
  }

  getPatientbyid(userNumber:number)
  {
    return this.http.get<Hospital>(`http://localhost:8080/hospital/${userNumber}`);
  }

  updatePatient(hospital:Hospital)
  {
    return this.http.put<Hospital>('http://localhost:8080/hospital',hospital);
  }

  deletePatient(userNumber:number)
  {
    return this.http.delete<String>(`http://localhost:8080/hospital/${userNumber}`);
  }

  validatePatient(userNumber:number)
  {
    return this.http.put<Hospital[]>(`http://localhost:8080/hospital/${userNumber}`,null);
  }

  rejectPatient(userNumber:number)
  {
    return this.http.put<Hospital[]>(`http://localhost:8080/hospital1/${userNumber}`,null);
  }
}
