import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {

  private themes = [
    "theme-light", "theme-dark", "theme-pinto", "theme-elo", "theme-grace", "theme-yoshi"
  ];

  private currentTheme = "";

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.changeTheme('theme-light');
  }

  public clickTheme(theme: string) {
    console.log("clicked theme: " + theme + "\n");
    this.changeTheme(theme);
  }

  private changeTheme(theme: string) {
    if (window.innerWidth >= 901 || this.currentTheme != theme) {
      this.updateTheme(theme);
    }

    else if (window.innerWidth <= 900 && this.currentTheme == theme) {
      const index = (this.themes.indexOf(theme) + 1) % this.themes.length;
      const newTheme = this.themes[index];
      this.updateTheme(newTheme);
    }
  }

  private updateTheme(theme: string) {
    const buttons = document.querySelectorAll('.theme-button');
    buttons.forEach(btn => btn.classList.remove('selected-theme'));

    const navButton = document.querySelector('.' + theme)!;
    if (navButton) {
      navButton.classList.add('selected-theme');
    }
    this.currentTheme = theme;
    this.themeService.changeTheme(theme);
  }
}