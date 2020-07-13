import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timerinput',
  templateUrl: './timerinput.component.html',
  styleUrls: ['./timerinput.component.css']
})
export class TimerinputComponent implements OnInit {
  @Output() countdownEvent = new EventEmitter<{countdown:any}>();
  @Output() logsEvent = new EventEmitter<{log:string}>();
  countdown:any = 0;
  countdownStarted:boolean = false;
  timer:any;
  pausedat = [];
  constructor() { }

  ngOnInit(): void {
  }

  isDisabled() {
    if (!parseInt(this.countdown)) {
      return true
    }
    return false
  }

  startCountdown() {
    this.logsEvent.emit({log:"started"});
    this.countdownStarted = true;
    this.countdownEvent.emit({countdown:this.countdown});
    this.timer = setInterval(()=> {this.countdown--;
      this.countdownEvent.emit({countdown:this.countdown});
      if(this.countdown == 0) {
        this.resetCountdown();
      }
    }, 1000);
  }

  pauseCountdown() {
    this.logsEvent.emit({log:"paused"});
    this.countdownStarted = false;
    this.countdownEvent.emit({countdown:this.countdown});
    this.pausedat.push('paused at '+ this.countdown);
    clearInterval(this.timer);
  }

  resetCountdown() {
    this.logsEvent.emit({log:"reset"});
    this.countdownStarted = false;
    this.countdown = 0;
    this.countdownEvent.emit({countdown:this.countdown});
    clearInterval(this.timer);
    this.pausedat = [];
  }

}
