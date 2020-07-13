import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timerclicklogger',
  templateUrl: './timerclicklogger.component.html',
  styleUrls: ['./timerclicklogger.component.css']
})
export class TimerclickloggerComponent implements OnInit {
  @Input() startClicked:number = 0;
  @Input() pauseClicked:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
