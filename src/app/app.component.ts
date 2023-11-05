import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor() {} 

  private currentTheme = "";

  private theme1 = "";
  private theme2 = "";
  private theme3 = "";
  private theme4 = "";

  ngOnInit() {
    this.changeTheme("light");
    
    // animationss

    document.documentElement.style.setProperty('--a-scale-duration', "0.6s");
    document.documentElement.style.setProperty('--a-scale-timing-function', "ease");
  }

  public changeTheme(theme: string) {
    console.log("Changing theme to %s", theme);

    if (theme == this.currentTheme)
      return;

    else if (theme == "light") {
      this.currentTheme = "light";

      var white = "#F1F1F1";
      var black = "#000000";
      var grey = "#E0E0E0";
      var purple = "#9296F0";
      
      document.documentElement.style.setProperty('--bkgd', white);

      // document.documentElement.style.setProperty('--bar', "#EEE8A9");
      // document.documentElement.style.setProperty('--bar-hover', "#B7A99A");
  
      document.documentElement.style.setProperty('--jcms-bkgd', black);
      document.documentElement.style.setProperty('--jcms-bkgd-hover', purple);

      document.documentElement.style.setProperty('--jcms-letter', white);
      document.documentElement.style.setProperty('--jcms-letter-hover', white);
  
      document.documentElement.style.setProperty('--whale1', black);      
      document.documentElement.style.setProperty('--whale1-hover', purple);

      document.documentElement.style.setProperty('--whale2', white);
      document.documentElement.style.setProperty('--whale2-hover', white);

      document.documentElement.style.setProperty('--blocks', black);
      document.documentElement.style.setProperty('--blocks-hover', purple);

      document.documentElement.style.setProperty('--sam', white);
      document.documentElement.style.setProperty('--sam-hover', white);
  
      document.documentElement.style.setProperty('--button-bkgd', grey);
      document.documentElement.style.setProperty('--button-bkgd-hover', purple);
      document.documentElement.style.setProperty('--button-bkgd-selected', black);

      document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(0, 0, 0, 0.4)");
      document.documentElement.style.setProperty('--button-text', black);
      document.documentElement.style.setProperty('--button-text-hover', white);
      document.documentElement.style.setProperty('--button-text-selected', white);

      document.documentElement.style.setProperty('--button-svg', black);
      document.documentElement.style.setProperty('--button-svg-hover', white);
      document.documentElement.style.setProperty('--button-svg-selected', white);

      document.documentElement.style.setProperty('--content-text', black);
    }

    else if (theme == "dark") {
      this.currentTheme = "dark";

      var white = "#F1F1F1";
      var black = "#000000";
      var dark_grey = "#343738";
      var purple = "#9296F0";
      
      document.documentElement.style.setProperty('--bkgd', black);

      // document.documentElement.style.setProperty('--bar', "#EEE8A9");
      // document.documentElement.style.setProperty('--bar-hover', "#B7A99A");
  
      document.documentElement.style.setProperty('--jcms-bkgd', white);
      document.documentElement.style.setProperty('--jcms-bkgd-hover', purple);

      document.documentElement.style.setProperty('--jcms-letter', black);
      document.documentElement.style.setProperty('--jcms-letter-hover', white);
  
      document.documentElement.style.setProperty('--whale1', white);      
      document.documentElement.style.setProperty('--whale1-hover', purple);

      document.documentElement.style.setProperty('--whale2', black);
      document.documentElement.style.setProperty('--whale2-hover', black);

      document.documentElement.style.setProperty('--blocks', white);
      document.documentElement.style.setProperty('--blocks-hover', purple);

      document.documentElement.style.setProperty('--sam', black);
      document.documentElement.style.setProperty('--sam-hover', black);
  
      document.documentElement.style.setProperty('--button-bkgd', dark_grey);
      document.documentElement.style.setProperty('--button-bkgd-hover', purple);
      document.documentElement.style.setProperty('--button-bkgd-selected', white);

      document.documentElement.style.setProperty('--button-shadow', "0px 0px 6px rgba(0, 0, 0, 0.4)");
      document.documentElement.style.setProperty('--button-text', white);
      document.documentElement.style.setProperty('--button-text-hover', black);
      document.documentElement.style.setProperty('--button-text-selected', black);

      document.documentElement.style.setProperty('--button-svg', white);
      document.documentElement.style.setProperty('--button-svg-hover', black);
      document.documentElement.style.setProperty('--button-svg-selected', black);

      document.documentElement.style.setProperty('--content-text', "white");
    }

    else if (theme == "pinto") {
      this.currentTheme = "pinto";

      var light_brown = "#B7A99A";
      var white = "#F1F1F1";
      var dark_brown = "#504538";
      var black = "#000000";
      var dark_pink = "#FF8981";
      
      document.documentElement.style.setProperty('--bkgd', light_brown);

      // document.documentElement.style.setProperty('--bar', "#EEE8A9");
      // document.documentElement.style.setProperty('--bar-hover', "#B7A99A");
  
      document.documentElement.style.setProperty('--jcms-bkgd', dark_brown);
      document.documentElement.style.setProperty('--jcms-bkgd-hover', dark_pink);

      document.documentElement.style.setProperty('--jcms-letter', white);
      document.documentElement.style.setProperty('--jcms-letter-hover', white);
  
      document.documentElement.style.setProperty('--whale1', dark_brown);      
      document.documentElement.style.setProperty('--whale1-hover', dark_pink);

      document.documentElement.style.setProperty('--whale2', white);
      document.documentElement.style.setProperty('--whale2-hover', white);

      document.documentElement.style.setProperty('--blocks', dark_brown);
      document.documentElement.style.setProperty('--blocks-hover', dark_pink);

      document.documentElement.style.setProperty('--sam', white);
      document.documentElement.style.setProperty('--sam-hover', white);
  
      document.documentElement.style.setProperty('--button-bkgd', white);
      document.documentElement.style.setProperty('--button-bkgd-hover', dark_pink);
      document.documentElement.style.setProperty('--button-bkgd-selected', dark_brown);

      document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(0, 0, 0, 0.4)");
      document.documentElement.style.setProperty('--button-text', black);
      document.documentElement.style.setProperty('--button-text-hover', white);
      document.documentElement.style.setProperty('--button-text-selected', white);

      document.documentElement.style.setProperty('--button-svg', black);
      document.documentElement.style.setProperty('--button-svg-hover', white);
      document.documentElement.style.setProperty('--button-svg-selected', white);

      document.documentElement.style.setProperty('--content-text', black);
    }

    else if (theme == "elo") {
      this.currentTheme = "elo";

      var light_pink = "#E0C1C0";
      var white = "#F1F1F1";
      var dark_pink = "#D19F9E";
      var bright_pink = "#B1569A";
      var black = "#000000";
      var dark_grey = "#343738";
      var grey = "#E0E0E0";
      
      document.documentElement.style.setProperty('--bkgd', light_pink);

      // document.documentElement.style.setProperty('--bar', "#EEE8A9");
      // document.documentElement.style.setProperty('--bar-hover', "#B7A99A");
  
      document.documentElement.style.setProperty('--jcms-bkgd', dark_grey);
      document.documentElement.style.setProperty('--jcms-bkgd-hover', bright_pink);

      document.documentElement.style.setProperty('--jcms-letter', white);
      document.documentElement.style.setProperty('--jcms-letter-hover', white);
  
      document.documentElement.style.setProperty('--whale1', dark_grey);      
      document.documentElement.style.setProperty('--whale1-hover', bright_pink);

      document.documentElement.style.setProperty('--whale2', white);
      document.documentElement.style.setProperty('--whale2-hover', white);

      document.documentElement.style.setProperty('--blocks', dark_grey);
      document.documentElement.style.setProperty('--blocks-hover', bright_pink);

      document.documentElement.style.setProperty('--sam', white);
      document.documentElement.style.setProperty('--sam-hover', white);
  
      document.documentElement.style.setProperty('--button-bkgd', dark_pink);
      document.documentElement.style.setProperty('--button-bkgd-hover', bright_pink);
      document.documentElement.style.setProperty('--button-bkgd-selected', dark_grey);

      document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(0, 0, 0, 0.4)");
      document.documentElement.style.setProperty('--button-text', dark_grey);
      document.documentElement.style.setProperty('--button-text-hover', white);
      document.documentElement.style.setProperty('--button-text-selected', white);

      document.documentElement.style.setProperty('--button-svg', dark_grey);
      document.documentElement.style.setProperty('--button-svg-hover', white);
      document.documentElement.style.setProperty('--button-svg-selected', white);

      document.documentElement.style.setProperty('--content-text', black);
    }

    else if (theme == "grace") {
      this.currentTheme = "grace";

      var yellow = "#EEE8A9";
      var white = "#F9F8FF";
      var black = "#000000";
      var dark_grey = "#343738";
      var grey = "#626667";
      var green = "#407376";
      
      document.documentElement.style.setProperty('--bkgd', dark_grey);

      // document.documentElement.style.setProperty('--bar', "#EEE8A9");
      // document.documentElement.style.setProperty('--bar-hover', "#B7A99A");
  
      document.documentElement.style.setProperty('--jcms-bkgd', green);
      document.documentElement.style.setProperty('--jcms-bkgd-hover', yellow);

      document.documentElement.style.setProperty('--jcms-letter', white);
      document.documentElement.style.setProperty('--jcms-letter-hover', white);
  
      document.documentElement.style.setProperty('--whale1', green);      
      document.documentElement.style.setProperty('--whale1-hover', yellow);

      document.documentElement.style.setProperty('--whale2', white);
      document.documentElement.style.setProperty('--whale2-hover', dark_grey);

      document.documentElement.style.setProperty('--blocks', green);
      document.documentElement.style.setProperty('--blocks-hover', yellow);

      document.documentElement.style.setProperty('--sam', white);
      document.documentElement.style.setProperty('--sam-hover', dark_grey);
  
      document.documentElement.style.setProperty('--button-bkgd', grey);
      document.documentElement.style.setProperty('--button-bkgd-hover', yellow);
      document.documentElement.style.setProperty('--button-bkgd-selected', green);

      document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(0, 0, 0, 0.4)");
      document.documentElement.style.setProperty('--button-text', white);
      document.documentElement.style.setProperty('--button-text-hover', dark_grey);
      document.documentElement.style.setProperty('--button-text-selected', white);

      document.documentElement.style.setProperty('--button-svg', white);
      document.documentElement.style.setProperty('--button-svg-hover', dark_grey);
      document.documentElement.style.setProperty('--button-svg-selected', white);

      document.documentElement.style.setProperty('--content-text', white);
    }

    else if (theme == "yoshi") {
      this.currentTheme = "yoshi";

      var light_green = "#407376"; 
      var white = "#F1F1F1";
      var dark_green = "#94B0B2"; //dark_green
      var purple = "#9296F0";
      var black = "#000000";
      var dark_grey = "#343738";
      // var dark_grey = "#343738";
      var grey = "#626667";

      document.documentElement.style.setProperty('--bkgd', light_green);

      // document.documentElement.style.setProperty('--bar', "#EEE8A9");
      // document.documentElement.style.setProperty('--bar-hover', "#B7A99A");
  
      document.documentElement.style.setProperty('--jcms-bkgd', dark_green);
      document.documentElement.style.setProperty('--jcms-bkgd-hover', purple);

      document.documentElement.style.setProperty('--jcms-letter', white);
      document.documentElement.style.setProperty('--jcms-letter-hover', white);
  
      document.documentElement.style.setProperty('--whale1', dark_green);      
      document.documentElement.style.setProperty('--whale1-hover', dark_grey);

      document.documentElement.style.setProperty('--whale2', white);
      document.documentElement.style.setProperty('--whale2-hover', white);

      document.documentElement.style.setProperty('--blocks', dark_green);
      document.documentElement.style.setProperty('--blocks-hover', dark_grey);

      document.documentElement.style.setProperty('--sam', white);
      document.documentElement.style.setProperty('--sam-hover', white);
  
      document.documentElement.style.setProperty('--button-bkgd', dark_grey);
      document.documentElement.style.setProperty('--button-bkgd-hover', purple);
      document.documentElement.style.setProperty('--button-bkgd-selected', dark_green);

      document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(0, 0, 0, 0.4)");
      document.documentElement.style.setProperty('--button-text', white);
      document.documentElement.style.setProperty('--button-text-hover', white);
      document.documentElement.style.setProperty('--button-text-selected', white);

      document.documentElement.style.setProperty('--button-svg', white);
      document.documentElement.style.setProperty('--button-svg-hover', white);
      document.documentElement.style.setProperty('--button-svg-selected', white);

      document.documentElement.style.setProperty('--content-text', white);
    }
  }
}