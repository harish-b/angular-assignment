import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TickerComponent } from './ticker/ticker.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { Countdowntimer2Component } from './countdowntimer2/countdowntimer2.component';
import { MarkstableComponent } from './markstable/markstable.component';
import { DynamicdivComponent } from './dynamicdiv/dynamicdiv.component';
import { DropdownComponent } from './ecommerce/dropdown/dropdown.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TimerinputComponent } from './countdowntimer/timerinput/timerinput.component';
import { TimerdisplayComponent } from './countdowntimer/timerdisplay/timerdisplay.component';
import { TimerloggerComponent } from './countdowntimer/timerlogger/timerlogger.component';
import { TimerclickloggerComponent } from './countdowntimer/timerclicklogger/timerclicklogger.component';
import { TinputComponent } from './countdowntimer2/tinput/tinput.component';
import { TdisplayComponent } from './countdowntimer2/tdisplay/tdisplay.component';
import { TloggerComponent } from './countdowntimer2/tlogger/tlogger.component';
import { TclickloggerComponent } from './countdowntimer2/tclicklogger/tclicklogger.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerComponent,
    EcommerceComponent,
    CountdowntimerComponent,
    Countdowntimer2Component,
    MarkstableComponent,
    DynamicdivComponent,
    DropdownComponent,
    TimerinputComponent,
    TimerdisplayComponent,
    TimerloggerComponent,
    TimerclickloggerComponent,
    TinputComponent,
    TdisplayComponent,
    TloggerComponent,
    TclickloggerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
