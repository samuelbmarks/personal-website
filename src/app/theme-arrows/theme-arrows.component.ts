import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-arrows',
  templateUrl: './theme-arrows.component.html',
  styleUrls: ['./theme-arrows.component.scss']
})
export class ThemeArrowsComponent {
  private themes = [
    "theme-light", "theme-dark", "theme-pinto", "theme-elo", "theme-grace", "theme-yoshi"
  ];

  constructor(private themeService: ThemeService) {}

  public changeTheme(direction: string) {
    const selectedTheme = document.querySelector('.selected-theme')!;
    const theme = selectedTheme.classList[1];

    if (direction == 'up') {
      var index = (this.themes.indexOf(theme) + 5) % this.themes.length;
    }
    else { // down
      var index = (this.themes.indexOf(theme) + 1) % this.themes.length;
    }

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
