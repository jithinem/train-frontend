import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  times: any;

  constructor(private http:HttpClient) { }

  register(username:any,password:any,confirmpassword:any,email:any,phone:any){
    const body={
      username,
      password,
      confirmpassword,
      email,
      phone
    }
    return this.http.post('http://localhost:3000/register',body)
  }

  login(email:any,password:any){
    const body={
      email,
      password
    }
    return this.http.post('http://localhost:3000/login',body)
  }

  addBooking(email:any,add:any){
    const body={
      email,
      add
    }
    return this.http.post('http://localhost:3000/booking',body)
  }

  getTrain(from:any,to:any){
    const body={
      from,
      to
    }
    return this.http.post('http://localhost:3000/trainTime',body)
  }


}
