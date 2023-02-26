import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  times: any;

  constructor(private http:HttpClient,private router:Router) { }


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

  addBooking(email:any,trainNumber:any,date:any,start:any,end:any,from:any,to:any,pass:any,totalRs:any){
    const body={
      email,
      trainNumber,
      date,start,end,from,to,pass,totalRs
    }
    return this.http.patch('http://localhost:3000/booking',body)
  }

  getTrain(from:any,to:any){
    const body={
      from,
      to
    }
    return this.http.post('http://localhost:3000/trainTime',body)
  }

  getTicket(email:any){
    const body={
      email
    }
    return this.http.post('http://localhost:3000/getTicket',body)
  }

  // saveChanges(email:any,username:any,phone:any,ID:any){
  //   const body={
  //     email,
  //     username,
  //     phone,
  //     ID
  //   }
  //   return this.http.put('http://localhost:3000/saveChanges',body)

  // }

  logout(){
    alert('logout successful');
    localStorage.removeItem('date');
    localStorage.removeItem('to');
    localStorage.removeItem('start');
    localStorage.removeItem('trainNumber');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('phone');
    localStorage.removeItem('id');
    localStorage.removeItem('add');
    localStorage.removeItem('pass');
    localStorage.removeItem('rs');
    localStorage.removeItem('end');
    localStorage.removeItem('from');
    localStorage.removeItem('times');
    localStorage.removeItem('totalRs');
    this.router.navigateByUrl('')

  }


}
