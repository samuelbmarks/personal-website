import { Component, OnInit } from '@angular/core';
import getUserIPAddress from './ts/ipAddress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private DOW_SHORT = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
  private DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor() { }

  async ngOnInit() {
    document.documentElement.style.setProperty('--gradientColor1', "#060B0B");
    document.documentElement.style.setProperty('--gradientColor2', "#0C1515");

    document.documentElement.style.setProperty('--color1', "#B8ACF9");
    document.documentElement.style.setProperty('--color2', "#C8C5FB");
    document.documentElement.style.setProperty('--color3', "#DEE0FD");

    document.documentElement.style.setProperty('--tab1', "#7B76B1");
    document.documentElement.style.setProperty('--tab2', "#8F88C9");
    document.documentElement.style.setProperty('--tab3', "#A39AE1");
    document.documentElement.style.setProperty('--tab4', "#B8ACF9");

    document.documentElement.style.setProperty('--bean', "#DEE0FD");
    document.documentElement.style.setProperty('--bean-hover', "#B8ACF9");

    // theme1 : red
    document.documentElement.style.setProperty('--theme1', "#AA8996");
    document.documentElement.style.setProperty('--theme1-mono', "#956B7C");

    // theme2 : green
    document.documentElement.style.setProperty('--theme3', "#AA8996");
    document.documentElement.style.setProperty('--theme3-mono', "#956B7C");

    // theme3 : yellow
    document.documentElement.style.setProperty('--theme4', "#AA8996");
    document.documentElement.style.setProperty('--theme4-mono', "#956B7C");

    // theme4 : purple
    document.documentElement.style.setProperty('--theme5', "#AA8996");
    document.documentElement.style.setProperty('--theme5-mono', "#956B7C");


    // logo
    document.documentElement.style.setProperty('--theme2', "#FEFEFE");
    document.documentElement.style.setProperty('--theme2-dark1', "#F2F1F1");
    document.documentElement.style.setProperty('--theme2-dark2', "#E6E4E5");
    document.documentElement.style.setProperty('--theme2-dark3', "#DBD6D8");
    document.documentElement.style.setProperty('--theme2-dark4', "#D0C8CB");
    document.documentElement.style.setProperty('--theme2-dark5', "#C6B9BE");
    document.documentElement.style.setProperty('--theme2-dark6', "#BCA9B1");
    
    // wait times for color transitions
    

    this.displayCalendarDate();
    this.displayDate();
    await this.displayIP();
  }

  displayCalendarDate() {
    var date = new Date();

    var dow = date.getDay();
    var day = date.getDate();

    var dowString = this.DOW_SHORT[dow];
  
    var dateDow = document.getElementById("date-dow");
    var dateDay = document.getElementById("date-day");

    dateDow!.textContent = dowString;
    dateDay!.textContent = day.toString();
  }

  displayDate() {
    var date = new Date();
    var dateElement = document.getElementById("date");
    dateElement!.textContent = date.toDateString();
  }

  async displayIP() {
    try {
      const ipAddress = await getUserIPAddress();
      const ipAddressElement = document.getElementById("ip-address");
      ipAddressElement!.textContent = ipAddress;
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  }
}
