import { Component, OnInit } from '@angular/core';
import { CountdowntimerService } from 'src/app/countdowntimer.service';

@Component({
  selector: 'app-tlogger',
  templateUrl: './tlogger.component.html',
  styleUrls: ['./tlogger.component.css']
})
export class TloggerComponent implements OnInit {
  logs = [];
  constructor(private countdowntimerService: CountdowntimerService) { }

  ngOnInit(): void {
    this.countdowntimerService.logsEmitter.subscribe(val => {
      this.logs.push(val+ " at "+ new Date().toLocaleString());
    })
  }

}
