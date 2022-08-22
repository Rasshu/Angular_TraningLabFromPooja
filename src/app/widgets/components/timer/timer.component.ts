import { Component } from '@angular/core';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  currentTime: string = '';
  constructor() {
    let today = new Date();
    this.currentTime =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  }
  refreshTime(): void {
    let today = new Date();
    this.currentTime =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  }
}
