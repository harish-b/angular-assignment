import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({providedIn: "root"})
export class CountdowntimerService {
    activatedEmitter = new Subject<{countdown: string, started:number, paused:number}>();
    logsEmitter = new Subject<string>();
}