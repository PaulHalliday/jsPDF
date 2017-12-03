import { Component, ViewChild } from '@angular/core';

import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  output: string;

  savePdf() {
    const doc = new jsPDF();

    doc.text('Hello World!', 10, 10);
    this.output = doc.output('datauri');

    const pdfObj = <HTMLObjectElement>document.getElementById('obj');

    pdfObj.data = this.output;
  }
}
