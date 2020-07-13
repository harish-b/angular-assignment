import { Component, OnInit } from '@angular/core';
import { CountdowntimerService } from 'src/app/countdowntimer.service';

@Component({
  selector: 'app-tdisplay',
  templateUrl: './tdisplay.component.html',
  styleUrls: ['./tdisplay.component.css']
})
export class TdisplayComponent implements OnInit {
  timerCountDisplay:any = 0;
  constructor(private countdowntimerService: CountdowntimerService) { }

  ngOnInit(): void {
    this.countdowntimerService.activatedEmitter.subscribe(val => {
      this.timerCountDisplay = val.countdown;
    })
  }

}
