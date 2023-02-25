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
  add:any;
  totalRs:any;


  constructor(private ds:DataService){
    // alert('ticket send to your mail')
    this.trainNumber=localStorage.getItem('trainNumber')||'';
    this.date=localStorage.getItem('date')||'';
    this.start=localStorage.getItem('start')||'';
    this.end=localStorage.getItem('end')||'';
    this.from=localStorage.getItem('from')||'';
    this.to=localStorage.getItem('to')||'';
    this.pass=localStorage.getItem('pass')||'';
    this.email=localStorage.getItem('email')||''
    this.totalRs=localStorage.getItem('totalRs')||''

    // this.add=localStorage.getItem('add')||'';
    // this.add=[this.trainNumber,this.date,this.start,this.end,this.from,this.to,this.pass]
    this.add=JSON.stringify("hhhhhhhhh")
    localStorage.setItem('add',this.add)


    // this.ds.addBooking(this.email,this.add).subscribe(
    //   (result:any)=>{
    //     alert(result.message);
    //   },
    //   result=>{
    //     alert(result.message.error);
        
    //   }
    // )
  
  }

  // @ViewChild('pdfTable') pdfTable!:ElementRef;


  // public downloadPdf(){
  //   alert('d');
  //   const doc=new jsPDF;
  //   const pdfTable=this.pdfTable.nativeElement;
  //   var html=htmlToPdfmake(pdfTable.innerHTML);
  //   const documentDefinition={content:html};
  //   pdfMake.createPdf(documentDefinition).open();
  //   // let doc=new jsPDF('landscape');
  //   // doc.fromHTML(this.pdfTable.nativeElement,function(){
  //   //   doc.save("ticket");
  //   // })
  // }

  @ViewChild('htmlData') htmlData!:ElementRef;

  public downloadPdf(): void {
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
