import { Component,ViewChild,ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import * as pdfMake from "pdfmake/build/pdfMake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
const htmlToPdfmake=require("html-to-pdfmake")
(pdfMake as any).vfs=pdfFonts.pdfMake.vfs;
// import * as jsPDF from 'jspdf';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

declare var require:any;



@Component({
  selector: 'app-display-ticket',
  templateUrl: './display-ticket.component.html',
  styleUrls: ['./display-ticket.component.css']
})
export class DisplayTicketComponent {
  email:any;
  displayTicket:any;
  trainNumber:any;
  date:any;
  start:any;
  end:any;
  from:any;
  to:any;
  pass:any;
  price:any;
  totalRs:any;
  show:any=false;

  
  constructor(private ds:DataService){
    this.email=JSON.parse(localStorage.getItem('email')||'');
    this.ds.getTicket(this.email).subscribe(
      (result:any)=>{
        alert(result.message);
        this.displayTicket=result.getTicket
      },
      result=>{
        alert(result.error.message)
      }
      
    )

  }
  logout(){
    this.ds.logout();
  }

  downloadPdf(displayTicket:any,i:any){
    this.show=true;
    this.date=displayTicket[i].date;
    this.trainNumber=displayTicket[i].trainNumber;
    this.from=displayTicket[i].from;
    this.start=displayTicket[i].start;
    this.to=displayTicket[i].to;
    this.end=displayTicket[i].end;
    this.pass=displayTicket[i].pass;
    this.totalRs=displayTicket[i].totalRs;
    console.log(this.trainNumber);
  }

  @ViewChild('htmlData') htmlData!:ElementRef;

  public downloadTicket(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 215;
      // let fileHeight = (canvas.height * fileWidth) / canvas.width;
      // console.log(canvas.width);
      // console.log(canvas.height);
      // console.log(fileHeight);     
      let fileHeight = 300;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('ticket.pdf');
    });
  }



}
