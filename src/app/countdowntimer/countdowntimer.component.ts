import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdowntimer',
  templateUrl: './countdowntimer.component.html',
  styleUrls: ['./countdowntimer.component.css']
})
export class CountdowntimerComponent implements OnInit {
  timerCount = 0;
  logs = [];
  started = 0;
  paused = 0;
  constructor() { }

  ngOnInit(): void {
  }

  countdownChanged(data: {countdown:any}) {
    this.timerCount = data.countdown;
  }

  logger(data: {log:string}) {
    this.logs.push(data.log+ " at "+ new Date().toLocaleString());
    switch(data.log) {
      case "started": this.started++;
                      break;
      case "paused": this.paused++;
                    break;
      case "reset": this.started = 0;
      this.paused = 0;
      this.logs = [];
    }
  }

}
