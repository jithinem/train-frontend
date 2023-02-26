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
  selector: 'app-spare',
  templateUrl: './spare.component.html',
  styleUrls: ['./spare.component.css']
})
export class SpareComponent {

  constructor(public ds:DataService){}







}
