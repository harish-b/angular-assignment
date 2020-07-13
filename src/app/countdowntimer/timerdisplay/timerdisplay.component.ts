import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timerdisplay',
  templateUrl: './timerdisplay.component.html',
  styleUrls: ['./timerdisplay.component.css']
})
export class TimerdisplayComponent implements OnInit {
  @Input() timerCountDisplay:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  

}
