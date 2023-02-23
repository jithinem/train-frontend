import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  trainNumber:any;
  date:any;
  start:any;
  end:any;
  from:any;
  to:any;
  pass:any;
  price:any;
  email:any;
  add:any=[];


  constructor(private ds:DataService){
    this.trainNumber=localStorage.getItem('trainNumber')||'';
    this.date=localStorage.getItem('date')||'';
    this.start=localStorage.getItem('start')||'';
    this.end=localStorage.getItem('end')||'';
    this.from=localStorage.getItem('from')||'';
    this.to=localStorage.getItem('to')||'';
    this.pass=localStorage.getItem('pass')||'';
    this.email=localStorage.getItem('email')||''
    // this.add=localStorage.getItem('add')||'';
    this.add=[this.trainNumber,this.date,this.start,this.end,this.from,this.to,this.pass]

    this.ds.addBooking(this.email,this.add).subscribe(
      (result:any)=>{
        alert(result.message);
      },
      result=>{
        alert(result.message.error);
        
      }
    )
  }

}
