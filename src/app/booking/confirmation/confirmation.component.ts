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

  }
  date:any;
  trainNumber:any;


}
