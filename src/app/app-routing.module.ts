import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TickerComponent } from './ticker/ticker.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { CountdowntimerComponent } from './countdowntimer/countdowntimer.component';
import { Countdowntimer2Component } from './countdowntimer2/countdowntimer2.component';
import { MarkstableComponent } from './markstable/markstable.component';
import { DynamicdivComponent } from './dynamicdiv/dynamicdiv.component';


const routes: Routes = [
  {  path:'ticker', component: TickerComponent},
{  path:'ecommerce', component: EcommerceComponent},
{  path:'countdown', component: CountdowntimerComponent},
{  path:'countdown2', component: Countdowntimer2Component},
{  path:'markstable', component: MarkstableComponent},
{  path:'dynamicdiv', component: DynamicdivComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
