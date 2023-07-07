import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fun-personal-website';

  constructor() { }

  ngOnInit() {
    // document.documentElement.style.setProperty('--gradientColor1', "#000000");
    // document.documentElement.style.setProperty('--gradientColor1', "#FFFFFF");
    document.documentElement.style.setProperty('--gradientColor1', "#060B0B");
    document.documentElement.style.setProperty('--gradientColor2', "#0C1515");
  }
}
