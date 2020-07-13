import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timerlogger',
  templateUrl: './timerlogger.component.html',
  styleUrls: ['./timerlogger.component.css']
})
export class TimerloggerComponent implements OnInit {
  @Input() logs;
  constructor() { }

  ngOnInit(): void {
  }

}
