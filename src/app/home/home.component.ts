import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fb:FormBuilder, private ds:DataService, private router:Router){}
  pass:any;
  from:any;
  to:any;
  date:any;
  times:any;
  email:any;
  // homeForm=this.fb.group({})
  checkTrain(){
    // console.log(this.pass);
    // console.log(this.from);
    // console.log(this.to);
    // console.log(this.date);
    var from=this.from;
    var to=this.to;
    var date=this.date;
    var pass=this.pass;
    console.log(from);
    console.log(to);
    this.ds.getTrain(from,to).subscribe(
      (result:any)=>{
        alert(result.message);
        localStorage.setItem('from',from)
        localStorage.setItem('to',to)
        localStorage.setItem('date',date)
        localStorage.setItem('pass',pass)
        localStorage.setItem('times',JSON.stringify(result.time))
        this.times=result.time;
        this.router.navigateByUrl('booking/traintime')
        console.log(this.times);
      }
      
    )

  }
  myaccount(){
    this.email=JSON.parse(localStorage.getItem('email')||'') 
  }
  logout(){
    alert('logout successful');
    localStorage.removeItem('date');
    localStorage.removeItem('to');
    localStorage.removeItem('start');
    localStorage.removeItem('trainNumber');
    localStorage.removeItem('email');
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
