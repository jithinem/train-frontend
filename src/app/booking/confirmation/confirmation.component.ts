import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(private router:Router){
    this.date=localStorage.getItem('date')||'';
    this.trainNumber=localStorage.getItem('trainNumber')||'';
    this.pass=localStorage.getItem('pass')||'';
    this.pass=parseInt(this.pass);
    this.rs=localStorage.getItem('rs')||'';
    this.rs=parseInt(this.rs);
    this.passRs=this.pass*this.rs;
    localStorage.setItem('totalRs',this.passRs)
    console.log(this.passRs);
    


  }
  date:any;
  trainNumber:any;
  pass:any;
  rs:any;
  passRs:any;


}
