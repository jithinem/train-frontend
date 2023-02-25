import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-traintime',
  templateUrl: './traintime.component.html',
  styleUrls: ['./traintime.component.css']
})
export class TraintimeComponent {
  times:any=[];
  from:any;
  to:any;
  constructor(private ds:DataService, private router:Router){
    this.from=localStorage.getItem('from')||'';
    this.to=localStorage.getItem('to')||'';
    this.times=JSON.parse(localStorage.getItem('times')||'');
  }
  booknow(times:any,i:any){
    localStorage.setItem('start',times[i].S);
    localStorage.setItem('end',times[i].E)
    localStorage.setItem('rs',times[i].rs)
    localStorage.setItem('trainNumber',times[i].TNO)
    // localStorage.setItem('add',JSON.stringify(times[i]))
    this.router.navigateByUrl('booking/confirmation')

  }
  logout(){
    alert('logout successful');
    this.router.navigateByUrl('')
  }


}
