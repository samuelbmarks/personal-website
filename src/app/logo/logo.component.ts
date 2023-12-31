import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  private themes = [
    "theme-light", "theme-dark", "theme-pinto", "theme-elo", "theme-grace", "theme-yoshi"
  ];

  constructor(private themeService: ThemeService) {}

  public changeTheme() {
    const selectedTheme = document.querySelector('.selected-theme')!;
    const theme = selectedTheme.classList[1];
    const index = (this.themes.indexOf(theme) + 1) % this.themes.length;
    const newTheme = this.themes[index];

    const buttons = document.querySelectorAll('.theme-button');
    buttons.forEach(btn => btn.classList.remove('selected-theme'));
    const themeButton = document.querySelector('.' + newTheme)!;

    if (themeButton) {
      themeButton.classList.add('selected-theme');
      this.themeService.changeTheme(newTheme);
    }
  }
}
