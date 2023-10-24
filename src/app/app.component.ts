import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private DOW_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  private DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  constructor() { }

  ngOnInit() {
    document.documentElement.style.setProperty('--title-color', "white");
    document.documentElement.style.setProperty('--text-color', "white");
    document.documentElement.style.setProperty('--main-color', "rgba(214, 203, 182, 1)");

    document.documentElement.style.setProperty('--svg-logo-color', "white");
    document.documentElement.style.setProperty('--svg-bkgd-color', "rgba(39, 54, 46, 0.6)");

    // document.documentElement.style.setProperty('--color-group1', "rgba(39, 54, 46, 0.6)"); //27362E
    // document.documentElement.style.setProperty('--color-group2', "rgba(40, 78, 59, 0.6)");
    // document.documentElement.style.setProperty('--color-group3', "rgba(39, 54, 46, 0.6)");
    // document.documentElement.style.setProperty('--color-group4', "rgba(40, 78, 59, 0.6)");
    // document.documentElement.style.setProperty('--color-group5', "rgba(155, 176, 165, 0.8)"); //9BB0A5

    document.documentElement.style.setProperty('--color-group1', "rgba(192, 86, 74, 0.5)"); //#41636A
    document.documentElement.style.setProperty('--color-group2', "rgba(253, 139, 123, 0.5)");
    document.documentElement.style.setProperty('--color-group3', "rgba(192, 86, 74, 0.5)");
    document.documentElement.style.setProperty('--color-group4', "rgba(253, 139, 123, 0.5)");
    document.documentElement.style.setProperty('--color-group5', "rgba(255, 194, 176, 0.5)"); //9BB0A5
    document.documentElement.style.setProperty('--color-group6', "rgba(183, 134, 179, 0.5)"); //9BB0A5

    // shadows
    document.documentElement.style.setProperty('--shadow-main', '0px 0px 25px rgba(0, 0, 0, 0.5)')
    document.documentElement.style.setProperty('--shadow-action', '0px 0px 10px rgba(0, 0, 0, 0.4)')
    document.documentElement.style.setProperty('--shadow-tag', '0px 0px 7px rgba(0, 0, 0, 0.4)')
    document.documentElement.style.setProperty('--shadow-app', '')
    
    // animations
    document.documentElement.style.setProperty('--a-scale-duration', "0.6s");
    document.documentElement.style.setProperty('--a-scale-timing-function', "ease");    
  }
}