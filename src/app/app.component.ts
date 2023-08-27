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

    document.documentElement.style.setProperty('--bean', "#DEE0FD");
    document.documentElement.style.setProperty('--bean-hover', "#B8ACF9");

    // theme1 : red
    document.documentElement.style.setProperty('--theme1', "#AA8996");
    document.documentElement.style.setProperty('--theme1-mono', "#956B7C");

    // logo
    document.documentElement.style.setProperty('--theme2', "#FEFEFE");
    document.documentElement.style.setProperty('--theme2-dark2', "#E6E4E5");
    document.documentElement.style.setProperty('--theme2-dark4', "#D0C8CB");

    document.documentElement.style.setProperty('--theme2-black', "#020102");

    // wait times for color transitions
    
    await this.displayIP();
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
