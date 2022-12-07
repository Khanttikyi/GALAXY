import { formatDate } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { getTimeGivenProgression } from '@ionic/angular';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit, OnDestroy {
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private timerSource = timer(1000, 1000);
  timerSubscription: Subscription;

  date = new Date();
  gettime = this.date.toLocaleTimeString();
  
  test = this.gettime.split(":");
  time: any
  hour: any;
  check: boolean = true;
  todaydate: any;
  hours: any;
  minutes: any;
  seconds: any;
  checkintime: any
  checkouttime: any
  workinghour: any
  
  constructor() {}

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.drawClock();
    this.timerSubscription = this.timerSource.subscribe(t => {
      this.drawClock();
    });
    this.getTime()
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      console.log("timerSubscription.unsubscribe()");
    }
  }
  drawClock() {
    // clear the background
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(
      0,
      0,
      this.canvas.nativeElement.width,
      this.canvas.nativeElement.height
    );

    // Get the current time
    const now = new Date();
    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const ampm = h < 12 ? "AM" : "PM";

    // Make the hour between 0 and 12 (not 24)
    h = h % 12;

    // Assemble the text
    // tslint:disable-next-line: max-line-length
    const clockText =
      this.addLeadingZeroWhenNecessary(h) +
      ":" +
      this.addLeadingZeroWhenNecessary(m) +
      ":" +
      this.addLeadingZeroWhenNecessary(s) +
      " " +
      ampm;
    const x = 10;
    const y = 60;

    // This green color was picked
    // using http://jscolor.com/
    this.ctx.fillStyle = "black";
    
    // Draw the text
    this.ctx.font = "67px Arial";
    // this.ctx.strokeStyle = 'black';
    this.ctx.fillText(clockText, x, y);
    // this.ctx.strokeText(clockText, x, y);
  }

  addLeadingZeroWhenNecessary(s: number) {
    return (s < 10 ? "0" : "") + s;
  }
  getTime() {
    

    this.hour = [formatDate(this.date, 'MM-dd-YYYY', 'en')];
    var dateNew = this.hour[0].split('-')[1];
    this.time = this.test[0] + ":" + this.test[1]
    this.todaydate = dateNew + ' ' + this.date.toLocaleString("en-US", { month: "long" }) + ' ' + this.hour[0].split('-')[2]

  }
  checkButton() {
    if (this.check) {
      this.check = false
      this.checkintime = this.gettime

    }
    else {
      this.check = true
      
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
      const ampm = h < 12 ? "AM" : "PM";
      h = h % 12;
      const clockText =
      this.addLeadingZeroWhenNecessary(h) +
      ":" +
      this.addLeadingZeroWhenNecessary(m) +
      ":" +
      this.addLeadingZeroWhenNecessary(s) +
      " " +
      ampm;
        this.checkouttime = clockText
        let inhr = this.checkintime.split(":");
        let outhr = this.checkouttime.split(":");
        let ff = outhr[0] - inhr[0]
        let gg = outhr[1] - inhr[1]
        let hh = outhr[2] - inhr[2]
        console.log("ff", ff )
        console.log("gg", gg )
        this.workinghour = ff + "hr" + gg + "minutes"
        
    }
  }
}
