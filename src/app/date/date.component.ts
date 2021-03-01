import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;

  constructor() { 
    setInterval( () => {
      let currectDate = new Date();
     this.dateMessage = currectDate.toDateString() + ' ' + currectDate.toLocaleTimeString(); 
    }, 1000)
  

  }

  ngOnInit() {
  }

  addTwoNumbers(i: number ,  j: number) {
    return i+j;
  }

}
