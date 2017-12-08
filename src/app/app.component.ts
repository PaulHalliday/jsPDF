import { Component, ViewChild } from '@angular/core';
declare var jquery: any;
declare var $: any;
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  output: string;

  showPdf() {
    const doc = new jsPDF();

    /* This will render your PDF from HTML, much more handy than the
    doc.text() function, as the other suffers horrendously from word wrap
    limitations. I have that code too if you need it! */

    doc.fromHTML($('.content').html(),
      15, 15, {
     'width': 170
    })
  
    this.output = doc.output('datauri');

    const pdfObj = <HTMLObjectElement>document.getElementById('obj');

    pdfObj.data = this.output;
  }
}
