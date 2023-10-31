import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor() {} 

  ngOnInit() {
    document.documentElement.style.setProperty('--svg-path-color', "white");
    document.documentElement.style.setProperty('--svg-bkgd-color', "rgba(39, 54, 46, 0.6)");

    document.documentElement.style.setProperty('--color-group1', "rgba(192, 86, 74, 0.5)"); //#41636A

    // animations
    document.documentElement.style.setProperty('--a-scale-duration', "0.6s");
    document.documentElement.style.setProperty('--a-scale-timing-function', "ease");    
  }
}