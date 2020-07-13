import { Component, OnInit } from '@angular/core';
import { CountdowntimerService } from 'src/app/countdowntimer.service';

@Component({
  selector: 'app-tclicklogger',
  templateUrl: './tclicklogger.component.html',
  styleUrls: ['./tclicklogger.component.css']
})
export class TclickloggerComponent implements OnInit {
  startClicked:number = 0;
  pauseClicked:number = 0;
  constructor(private countdowntimerService: CountdowntimerService) { }

  ngOnInit(): void {
    this.countdowntimerService.activatedEmitter.subscribe(val => {
      this.startClicked = val.started;
      this.pauseClicked = val.paused;
    })
  }

}
