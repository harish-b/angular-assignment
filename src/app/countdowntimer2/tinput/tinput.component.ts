import { Component, OnInit } from '@angular/core';
import {CountdowntimerService} from '../../countdowntimer.service';

@Component({
  selector: 'app-tinput',
  templateUrl: './tinput.component.html',
  styleUrls: ['./tinput.component.css']
})
export class TinputComponent implements OnInit {

  countdown:any = 0;
  started  = 0;
  paused = 0;
  countdownStarted:boolean = false;
  timer:any;
  pausedat = [];
  constructor(private countdowntimerService:CountdowntimerService) { }

  ngOnInit(): void {
  }

  isDisabled() {
    if (!parseInt(this.countdown)) {
      return true
    }
    return false
  }

  startCountdown() {
    this.countdownStarted = true;
    this.started++;
    this.countdowntimerService.activatedEmitter.next({countdown: this.countdown, started:this.started, paused:this.paused});
    this.countdowntimerService.logsEmitter.next("started");
    this.timer = setInterval(()=> {this.countdown--;
      this.countdowntimerService.activatedEmitter.next({countdown: this.countdown, started:this.started, paused:this.paused});
      if(this.countdown == 0) {
        this.resetCountdown();
      }
    }, 1000);
  }

  pauseCountdown() {
    this.countdowntimerService.logsEmitter.next("paused");
    this.countdownStarted = false;
    this.paused++;
    this.countdowntimerService.activatedEmitter.next({countdown: this.countdown, started:this.started, paused:this.paused});
    this.pausedat.push('paused at '+ this.countdown);
    clearInterval(this.timer);
  }

  resetCountdown() {
    this.countdownStarted = false;
    this.countdown = 0;
    this.started = 0;
    this.paused = 0;
    this.countdowntimerService.activatedEmitter.next({countdown: this.countdown, started:this.started, paused:this.paused});
    clearInterval(this.timer);
    this.pausedat = [];
  }

}
