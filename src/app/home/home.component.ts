import { Component } from '@angular/core';
import getClientIPAddress from '../ts/ipAddress';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public clientIpAddress = "...";
  public currentDate = "...";
  public currentTime = "...";

  constructor() {
    let date = new Date().toLocaleDateString().replaceAll("/", ".");
    let time = new Date().toLocaleTimeString();
    this.currentDate = date;
    this.currentTime = time;  
  
    setInterval(() => {
      let date = new Date().toLocaleDateString().replaceAll("/", ".");
      let time = new Date().toLocaleTimeString();
      this.currentDate = date;
      this.currentTime = time;
    }, 1000);

    this.setIPs();
  }

  async setIPs() {
    try {
      this.clientIpAddress = await getClientIPAddress();
    } catch (error) {
      console.error('Error setting IP addresses:', error);
    }
  }
}