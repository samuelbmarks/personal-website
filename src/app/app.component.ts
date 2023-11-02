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
    
    // animations

    document.documentElement.style.setProperty('--a-scale-duration', "0.6s");
    document.documentElement.style.setProperty('--a-scale-timing-function', "ease");

    this.updateThemeProperties();
  }

  public changeTheme(theme: string) {
    console.log("Changing theme to %s", theme);

    if (theme == this.currentTheme)
      return;

    else if (theme == "light") {
      this.currentTheme = "light";

      this.theme1 = "#F1F1F1";
      this.theme2 = "#000000";
      this.theme3 = "#E0E0E0";
      this.theme4 = "#9296F0";
    }

    else if (theme == "dark") {
      this.currentTheme = "dark";

      this.theme1 = "#000000";
      this.theme2 = "#F1F1F1";
      this.theme3 = "#343738";
      this.theme4 = "#9296F0";
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

    this.updateThemeProperties();
  }

  private updateThemeProperties() {
    document.documentElement.style.setProperty('--bkgd', this.theme1);

    document.documentElement.style.setProperty('--bar', this.theme1);
    // document.documentElement.style.setProperty('--bar-hover', "#E7E7E7");

    document.documentElement.style.setProperty('--jcms-bkgd', this.theme2);
    document.documentElement.style.setProperty('--jcms-bkgd-hover', this.theme4);
    document.documentElement.style.setProperty('--jcms-letter', this.theme1);
    document.documentElement.style.setProperty('--jcms-letter-hover', this.theme1);

    document.documentElement.style.setProperty('--whale1', this.theme2);
    document.documentElement.style.setProperty('--whale2', this.theme1);
    document.documentElement.style.setProperty('--whale1-hover', this.theme4);
    document.documentElement.style.setProperty('--whale2-hover', this.theme1);

    // document.documentElement.style.setProperty('--button-shadow', "0px 0px 10px rgba(0, 0, 0, 0.4)");
    document.documentElement.style.setProperty('--button-text', this.theme2);
    document.documentElement.style.setProperty('--button-svg', this.theme2);
    document.documentElement.style.setProperty('--button-bkgd', this.theme3);

    document.documentElement.style.setProperty('--button-bkgd-hover', this.theme4);
    document.documentElement.style.setProperty('--button-svg-hover', "#FFFFFF");
    document.documentElement.style.setProperty('--button-text-hover', "#FFFFFF");
    
    document.documentElement.style.setProperty('--button-bkgd-selected', this.theme2);
    document.documentElement.style.setProperty('--button-svg-selected', this.theme1);
    document.documentElement.style.setProperty('--button-text-selected', this.theme1);

    document.documentElement.style.setProperty('--content-text', this.theme2);
  }
}