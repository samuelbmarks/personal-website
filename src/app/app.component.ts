import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor() {} 

  private currentTheme = "";

  ngOnInit() {
    this.changeTheme("light");
    
    // animations
    document.documentElement.style.setProperty('--a-scale-duration', "0.6s");
    document.documentElement.style.setProperty('--a-scale-timing-function', "ease");    
  }

  public changeTheme(theme: string) {
    console.log("Changing theme to %s", theme);

    if (theme == this.currentTheme)
      return;

    else if (theme == "light") {
      this.currentTheme = "light";

      document.documentElement.style.setProperty('--bkgd', "rgba(255, 255, 255, 1)");

      document.documentElement.style.setProperty('--bar', "rgba(255, 255, 255, 1)");
      // document.documentElement.style.setProperty('--bar-hover', "#E7E7E7");

      document.documentElement.style.setProperty('--jcms-bkgd', "black");
      document.documentElement.style.setProperty('--jcms-bkgd-hover', "#7794C4");
      document.documentElement.style.setProperty('--jcms-letter', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--jcms-letter-hover', "rgba(241, 241, 241, 1)");

      document.documentElement.style.setProperty('--whale1', "black");
      document.documentElement.style.setProperty('--whale2', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--whale1-hover', "#7794C4");
      document.documentElement.style.setProperty('--whale2-hover', "rgba(241, 241, 241, 1)");

      // document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(0, 0, 0, 0.4)");
      document.documentElement.style.setProperty('--button-text', "black");
      document.documentElement.style.setProperty('--button-svg', "black");
      document.documentElement.style.setProperty('--button-bkgd', "#E7E7E7");
      // document.documentElement.style.setProperty('--button-bkgd', "rgba(241, 241, 241, 1)");

      document.documentElement.style.setProperty('--button-bkgd-hover', "#7794C4");
      document.documentElement.style.setProperty('--button-svg-hover', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--button-text-hover', "rgba(241, 241, 241, 1)");
      
      document.documentElement.style.setProperty('--button-bkgd-selected', "black");
      document.documentElement.style.setProperty('--button-svg-selected', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--button-text-selected', "rgba(241, 241, 241, 1)");

      document.documentElement.style.setProperty('--content-text', "black");
    }

    else if (theme == "dark") {
      this.currentTheme = "dark";

      // #170000

      document.documentElement.style.setProperty('--bkgd', "#000000");

      document.documentElement.style.setProperty('--bar', "#000000");
      // document.documentElement.style.setProperty('--bar-hover', "#4B4A54");

      document.documentElement.style.setProperty('--jcms-bkgd', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--jcms-letter', "black");
      document.documentElement.style.setProperty('--jcms-bkgd-hover', "#7794C4");
      document.documentElement.style.setProperty('--jcms-letter-hover', "rgba(241, 241, 241, 1)");

      document.documentElement.style.setProperty('--whale1', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--whale2', "black");
      document.documentElement.style.setProperty('--whale1-hover', "black");
      document.documentElement.style.setProperty('--whale2-hover', "rgba(241, 241, 241, 1)");
      
      // document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(241, 241, 241, 1, 0.4)");
      // document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(255, 255, 255, 0.2)");
      document.documentElement.style.setProperty('--button-text', "white");
      document.documentElement.style.setProperty('--button-svg', "white");
      document.documentElement.style.setProperty('--button-bkgd', "#343738");

      document.documentElement.style.setProperty('--button-bkgd-hover', "#7794C4");
      document.documentElement.style.setProperty('--button-svg-hover', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--button-text-hover', "rgba(241, 241, 241, 1)");
      
      document.documentElement.style.setProperty('--button-bkgd-selected', "rgba(241, 241, 241, 1)");
      document.documentElement.style.setProperty('--button-svg-selected', "black");
      document.documentElement.style.setProperty('--button-text-selected', "black");
      
      document.documentElement.style.setProperty('--content-text', "rgba(241, 241, 241, 1)");
    }

    else if (theme == "pinto") {
      this.currentTheme = "pinto";
    }

    else if (theme == "elo") {
      this.currentTheme = "elo";
    }

    else if (theme == "grace") {
      this.currentTheme = "grace";
    }

    else if (theme == "yoshi") {
      this.currentTheme = "yoshi";
    }
  }
}