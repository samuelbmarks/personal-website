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
    document.documentElement.style.setProperty('--app-logo-color', "white");
    
    // animations
    document.documentElement.style.setProperty('--a-scale-duration', "0.6s");
    document.documentElement.style.setProperty('--a-scale-timing-function', "ease");
    
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
